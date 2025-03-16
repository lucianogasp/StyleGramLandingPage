import './Header.css';

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
    )
}

export default Header;