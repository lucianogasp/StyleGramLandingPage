// import components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import BackgroundColorful from '../../components/BackgroundColorful/BackgroundColorful.jsx';
import PlataformFeaturesList from '../../components/PlataformFeaturesList/PlataformFeaturesList.jsx';
import ImageSalesNetwork from '../../components/ImageSalesNetwork/ImageSalesNetwork.jsx';

// import images
import paraEmpresas from '/icons/image-red90x90.png';

const nossaComunidade1 = undefined;
const nossaComunidade2 = undefined;
const nossaComunidade3 = undefined;
const nossaComunidade4 = undefined;
const nossaComunidade5 = undefined;

function ParaEmpresas() {
    
    return (
        <>
            <Header />
            <BackgroundColorful incrementedClasses={'flex fd-row-reverse jc-spacearound al-center'}>
                <PlataformFeaturesList>

                    <div>
                        <h2 className="font-gradient-black txtal-center">Somos um Espaço para Conexões</h2>
                        <p>Com a StyleGram, sua Empresa estará se conectando com milhõesde de usuários apaixonados por moda e formas de se expressar!</p>
                    </div>

                    <ul className='ul-none'>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={paraEmpresas} alt="list-nossacomunidade5" />
                            </div>
                            <div>
                                <h3 className="border-title">Sua Nova Linha de Roupas aqui</h3>
                                <p>Adicione suas Coleções em nossa plataforma e permita que os usuários interajam e se divirtam com o que vocês têm para oferecer.</p>
                            </div>
                        </li>

                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade1} alt="list-nossacomunidade1" />
                            </div>
                            <div>
                                <h3 className="border-title">Lance desafios e aumente engajamento</h3>
                                <p>Você pode criar competições de quem usou melhor a roupa escolhida ou quem demonstrou maior criatividade na construção de looks! </p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade2} alt="list-nossacomunidade2" />
                            </div>
                            <div>
                                <h3 className="border-title">Tenha mais proximidade com seus Clientes</h3>
                                <p>O app é nichado para amantes da moda, uma oportunidade incrível para estreitar esse vínculo.</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade3} alt="list-nossacomunidade3" />
                            </div>
                            <div>
                                <h3 className="border-title">Receba Insights e Feedbacks</h3>
                                <p>Quer criar uma nova Linha, mas ainda não sabe como será a reação do público? Teste aqui antes de lançar no Varejo.</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade4} alt="list-nossacomunidade4" />
                            </div>
                            <div>
                                <h3 className="border-title">Faça suas vendas aqui!</h3>
                                <p>O melhor de tudo! Quem gostou do que provou, pode simplesmente comprar diretamente em nossa plataforma.</p>
                            </div>
                        </li>
                    </ul>

                    {/* Componente que não faço ideia oq faz por isso não desenvolvi ainda */}

                </PlataformFeaturesList>

                <ImageSalesNetwork />

            </BackgroundColorful>
            <Footer />
        </>
    )
}

export default ParaEmpresas;