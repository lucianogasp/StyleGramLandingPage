// import modules
import './ContactModal.css';

// import components
import { InputField } from '../InputField/InputField.jsx';
import { TextareaField } from '../TextareaField/TextareaField.jsx';

// import assets
import { mailContact } from '@/assets/images';

export function ContactModal({ updateWrapper }) {

  async function handleSubmit(event) {
    event.preventDefault();
    const url = 'http://localhost:3001/forms/';
    const formData = new FormData(event.currentTarget);
    const objFormData = Object.fromEntries(formData.entries());
    try {
      const rawResponse = await fetch(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objFormData)
        }
      );
      const content = await rawResponse.json();

      if(!rawResponse.ok) {
        console.error(content);
        return;
      }
      
      console.log('SUCESSO na comunicação com a API:', content);

    } catch(err) {
      console.error('ERRO de comunicação com a API: ', err);
    }
  }

  return (
    <div className='contact-modal-overlay'>
      <section className='contact-modal-section border-shdw-yellow'>

        <div className='header-wrapper'>
          <div className='login-button-secondary'>
            <h2>Formuláro de Contato</h2>
          </div>
          <span onClick={updateWrapper}>X</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='figure-container'>
            <figure>
              <img src={mailContact} alt="mail-contact" />
            </figure>
            <div>
              <InputField type={'text'} 
                          placeholder={'Insira seu Nome Completo'} 
                          labelText={'Nome Completo:'} 
                          inputName={'name'} 
                          isRequired={true}
              />
              <InputField type={'tel'} 
                          placeholder={'Insira o número do seu WhatsApp'} 
                          labelText={'Seu WhatsApp:'} 
                          inputName={'whatsapp_number'} 
                          isRequired={true}
              />
            </div>
          </div>
          <InputField type={'email'} 
                      placeholder={'Insira seu Email'} 
                      labelText={'Seu Email:'} 
                      inputName={'email'} 
          />
          <InputField type={'text'} 
                      placeholder={'Insira o Motivo do Contato'} 
                      labelText={'Motivo do Contato:'} 
                      inputName={'contact_reason'} 
                      isRequired={true}
          />
          <TextareaField textIdName={'contact_message'}
                          labelText={'Mensagem:'}
                          placeholder={'Escreva sua Mensagem aqui...'}
                          maxLength={1000}
                          rows={5}
          />

          <button className='login-button'>
            Enviar Mensagem
          </button>
        </form>

      </section>
    </div>
  )
}
