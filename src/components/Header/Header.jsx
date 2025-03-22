import './Header.css';

<<<<<<< HEAD
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
=======
function Header () {

    return (
        <header>
        <div class="div-header flex-box-spacebetween">
            <img src="../../assets/stylegram-logo.png" alt="stylegram-logo" />
            <nav class="nav-header">
                <ul>
                    <li class="font-gradient-black">Nossa Proposta</li>
                    <li class="font-gradient-black">Para Empresas</li>
                    <li class="font-gradient-black">Nossa Equipe</li>
                    <li class="login-button">Fazer Login</li>
                </ul>
            </nav>
        </div>
    </header>
>>>>>>> 341eb786d1dfe617abd484a832252f6937d40410
    )
}

export default Header;