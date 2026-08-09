// import modules
import './Header.css';
import { Link } from 'react-router-dom';

// import assets
import { stylegramLogo } from '@/assets/icons';

export function Header() {
  return (
    <header className='main-header'>
      <img src={stylegramLogo} alt="stylegram-logo" />
      <nav>
        <ul>
          <li>
            <h2>
            <Link to='/nossa-proposta'
                  className='font-c-black'
            >Nossa Proposta</Link>
            </h2>
          </li>
          <li>
            <h2>
            <Link to='/para-empresas'
                  className='font-c-black'
            >Para Empresas</Link>
            </h2>
          </li>
          <li>
            <h2>
            <Link to='/nossa-equipe'
                  className='font-c-black'
            >Nossa Equipe</Link>
            </h2>
          </li>
          <li>
            <h2>
            <Link to='/login'
                  className='login-button'
            >Fazer Login</Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  )
}
