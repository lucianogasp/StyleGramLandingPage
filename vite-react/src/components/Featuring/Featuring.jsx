// import modules
import './Featuring.css';

export function Featuring({ featuringContent }) {
  return (
    <section className='featuring-section'>
      <figure>
        <img src={featuringContent.image} alt={featuringContent.imageAlt} />
      </figure>
      <h3 className='login-button'>{featuringContent.title}</h3>
      <h3 className='border-shdw-yellow'>
        <a href={featuringContent.link} target='blank'>{featuringContent.subtitle}</a>
      </h3>
      <h3>{featuringContent.lead}</h3>
    </section>
  )
}