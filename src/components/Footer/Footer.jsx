// import modules
import './Footer.css';

// import assets
import { stylegramLogoCnpj, linkedin, instagram, tiktok, map, whatsapp, mail } from '@/assets/icons';

export function Footer() {
  return (
    <footer>
      <img src={stylegramLogoCnpj} alt="stylegram-logo-cnpj" />
    
      <nav>
        <h3 className='backg-c-black'>Redes Sociais:</h3>
        <ul>
          <li>
            <img src={linkedin} alt="linkedin" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <li>
            <img src={tiktok} alt="tiktok" />
          </li>
        </ul>
      </nav>
    
      <nav>
        <h3 className='backg-c-black'>Localização:</h3>
        <ul>
          <li>
            <img src={map} alt="map" />
          </li>
          <li>
            <p>Curitiba - PR</p>
          </li>
        </ul>
      </nav>
    
      <nav>
        <h3 className='backg-c-black'>Contato:</h3>
        <ul>
          <li>
            <img src={whatsapp} alt="whatsapp" />
            <p>41-984012126</p>
          </li>
          <li>
            <img src={mail} alt="mail" />
            <p>adm.stylegram@gmail.com</p>
          </li>
        </ul>
      </nav>
    
    </footer>
  )
}
