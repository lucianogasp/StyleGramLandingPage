// import modules
import './textareaField.css';

export function TextareaField({ textIdName, labelText, placeholder, maxLenght, rows, isRequired=false }) {
  return (
    <section className='textarea-field-section'>
      <label htmlFor={textIdName}>{labelText}</label>
      <textarea name={textIdName} id={textIdName} placeholder={placeholder} maxLength={maxLenght} rows={rows} required={isRequired} />
    </section>
  )
}
