// import modules
import './ContactModal.css';

// import components
import { InputField } from '../InputField/InputField.jsx';
import { TextareaField } from '../TextareaField/TextareaField.jsx';

// import assets
import { mailContact } from '@/assets/images';

export function ContactModal({ updateWrapper }) {
  return (
    <div className='contact-modal-overlay'>
      <section className='contact-modal-section border-shdw-yellow'>

        <div className='header-wrapper'>
          <div className='login-button-secondary'>
            <h2>Formuláro de Contato</h2>
          </div>
          <span onClick={updateWrapper}>X</span>
        </div>

        <form action="POST">
          <div className='figure-container'>
            <figure>
              <img src={mailContact} alt="mail-contact" />
            </figure>
            <div>
              <InputField type={'text'} 
                          placeholder={'Insira seu Nome Completo'} 
                          labelText={'Nome Completo:'} 
                          inputIdName={'name'} 
                          isRequired={true}
              />
              <InputField type={'tel'} 
                          placeholder={'Insira o número do seu WhatsApp'} 
                          labelText={'Seu WhatsApp:'} 
                          inputIdName={'whatsapp-number'} 
                          isRequired={true}
              />
            </div>
          </div>
          <InputField type={'email'} 
                      placeholder={'Insira seu Email'} 
                      labelText={'Seu Email:'} 
                      inputIdName={'email'} 
          />
          <InputField type={'text'} 
                      placeholder={'Insira o Motivo do Contato'} 
                      labelText={'Motivo do Contato:'} 
                      inputIdName={'contact-reason'} 
                      isRequired={true}
          />
          <TextareaField textIdName={'textarea'}
                          labelText={'Mensagem:'}
                          placeholder={'Escreva sua Mensagem aqui...'}
                          maxLength={500}
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
