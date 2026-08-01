// import modules
import './Header.css';
import { Link } from 'react-router-dom';

// import assets
import { stylegramLogo } from '@/assets/icons';

export function Header() {
  return (
    <header>
      <img src={stylegramLogo} alt="stylegram-logo" />
      <nav>
        <ul>
          <li>
            <Link to='/nossa-proposta'
                  className='font-c-black'
            >Nossa Proposta</Link>
          </li>
          <li>
            <Link to='/para-empresas'
                  className='font-c-black'
            >Para Empresas</Link>
          </li>
          <li>
            <Link to='/nossa-equipe'
                  className='font-c-black'
            >Nossa Equipe</Link>
          </li>
          <li>
            <Link to='/login'
                  className='login-button'
            >Fazer Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
