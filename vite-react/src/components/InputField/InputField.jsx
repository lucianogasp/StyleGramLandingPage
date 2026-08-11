// import modules
import './InputField.css';

export function InputField({ type, placeholder, labelText, inputName, isRequired=false }) {
  return (
    <section className='input-field-section'>
      <label htmlFor={inputName}>{labelText}</label>
      <input name={inputName} id={inputName} type={type} placeholder={placeholder} required={isRequired} />
    </section>
  )
}
