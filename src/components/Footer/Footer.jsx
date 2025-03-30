import './Footer.css';

function Footer() {

    return (
        <footer className="flex jc-spacebetween">
            <img src="./icons/stylegram-logo-cnpj.png" alt="instagram-log-cnpj" />
            <nav className='flex jc-center al-center txtal-center'>
                <h3 className="background-gradient-black">Redes Sociais:</h3>
                <ul className='ul-none flex al-center'>
                    <li>
                        <img src="./icons/linkedin.png" alt="linkedin" />
                    </li>
                    <li>
                        <img src="./icons/instagram.png" alt="instagram" />
                    </li>
                    <li>
                        <img src="./icons/tiktok.png" alt="tiktok" />
                    </li>
                </ul>
            </nav>
            <nav className='flex jc-center al-center txtal-center'>
                <h3 className="background-gradient-black">Localização:</h3>
                <ul className='ul-none flex al-center'>
                    <li>
                        <img src="./icons/map.png" alt="map" />
                    </li>
                    <li>
                        <p className="font-gradient-black">Curitiba - PR</p>
                    </li>
                </ul>
            </nav>
            <nav className='flex jc-center al-center txtal-center'>
                <h3 className="background-gradient-black">Contato:</h3>
                <ul className='ul-none flex al-center'>
                    <li className='flex al-center'>
                        <img src="./icons/whatsapp.png" alt="whatsapp" />
                        <p className="font-gradient-black">41-984012126</p>
                    </li>
                    <li className='flex al-center'>
                        <img src="./icons/mail.png" alt="mail" />
                        <p className="font-gradient-black">adm.stylegram@gmail.com</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;