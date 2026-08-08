// import modules
import './InputField.css';

export function InputField({ type, placeholder, labelText, inputIdName, isRequired = false }) {
  return (
    <section className='input-field-section'>
      <label htmlFor={inputIdName}>{labelText}</label>
      <input id={inputIdName} type={type} placeholder={placeholder} required={isRequired} />
    </section>
  )
}
