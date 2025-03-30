import './Header.css';

// react dom router imports
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <div className="flex jc-spacebetween al-center">
                <img src="/icons/stylegram-logo.png" alt="stylegram-logo" />
                <nav>
                    <ul className='ul-none al-center'>
                        <li>
                            <Link to='nossa-proposta' className='font-gradient-black'>Nossa Proposta</Link>
                        </li>
                        <li>
                            <Link to='para-empresas' className="font-gradient-black">Para Empresas</Link>
                        </li>
                        <li>
                            <Link to='nossa-equipe' className="font-gradient-black">Nossa Equipe</Link>
                        </li>
                        <li>
                            <Link to='login' className="login-button">Fazer Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;