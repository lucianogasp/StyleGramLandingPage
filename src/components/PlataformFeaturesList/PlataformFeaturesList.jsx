// import modules
import './PlataformFeaturesList.css';

export function PlataformFeaturesList({ featuresList }) {
  return (
    <article className='plataform-features-article'>
      <header>
        <h2>{featuresList.headerSection.title}</h2>
        <p>{featuresList.headerSection.lead}</p>
      </header>

      <ul>
        {featuresList.listSection.map(item => {
          return (
            <li key={item.id}>
              <figure>
                <img src={item.image} alt={item.imageAlt} />
              </figure>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </li>
          )
        })}
      </ul>

      <footer>
        <span>{featuresList.footerSection.text1}</span>
        <span>{featuresList.footerSection.text2}</span>
      </footer>
    </article>
  )
}