import './Header.css';

function Header() {

    return (
        <header>
            <div className="flex jc-spacebetween al-center">
                <img src="/icons/stylegram-logo.png" alt="stylegram-logo" />
                <nav>
                    <ul className='ul-none al-center'>
                        <li className="font-gradient-black">Nossa Proposta</li>
                        <li className="font-gradient-black">Para Empresas</li>
                        <li className="font-gradient-black">Nossa Equipe</li>
                        <li className="login-button">Fazer Login</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;