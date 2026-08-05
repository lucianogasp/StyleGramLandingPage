// import modules
import './PlataformFeaturesList.css';

export function PlataformFeaturesList({ featuresList }) {
  return (
    <article className='plataform-features-article'>
      <header className='font-c-black'>
        <h2 className='font-c-black'>{featuresList.headerSection.title}</h2>
        <p>{featuresList.headerSection.lead}</p>
      </header>
    
      <ul>
        {featuresList.listSection.map(item => {
          return (
            <li key={item.id}>
              <figure>
                <img src={item.image} alt={item.imageAlt} />
              </figure>
              <div className='items-container'>
                <h3 className='login-button'>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    
      <footer className='border-shdw-yellow'>
        <span>
          <p className='font-c-black'>{featuresList.footerSection.text1}</p>
        </span>
        <span>
          <p className='backg-c-black'>{featuresList.footerSection.text2}</p>
          </span>
      </footer>
    </article>
  )
}