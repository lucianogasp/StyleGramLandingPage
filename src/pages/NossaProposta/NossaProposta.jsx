// import components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import BackgroundColorful from '../../components/BackgroundColorful/BackgroundColorful.jsx';
import PlataformFeaturesList from '../../components/PlataformFeaturesList/PlataformFeaturesList.jsx';
import ImageAi from '../../components/ImageAi/ImageAi.jsx';

// import images
import nossaComunidade1 from '../../assets/images/list-nossacomunidade1.png';
import nossaComunidade2 from '../../assets/images/list-nossacomunidade2.png';
import nossaComunidade3 from '../../assets/images/list-nossacomunidade3.png';
import nossaComunidade4 from '../../assets/images/list-nossacomunidade4.png';
import nossaComunidade5 from '../../assets/images/list-nossacomunidade5.png';

function NossaProposta() {

    return (
        <>
            <Header />
            <BackgroundColorful incrementedClasses={'flex fd-row jc-spacearound al-center'}>
                <PlataformFeaturesList>
                    <div>
                        <h2 className="font-gradient-black txtal-center">Nós somos uma Comunidade!</h2>
                        <p>A StyleGram é uma rede social para você libertar sua criatividade e experimentar combinações de roupas e compartilhar seus looks!</p>
                    </div>

                    <ul className='ul-none'>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade1} alt="list-nossacomunidade1" />
                            </div>
                            <div>
                                <h3 className="border-title">Seu Guarda-Roupa virtual</h3>
                                <p>Tire fotos das suas roupas e monte seu Closet Virtual para todas as ocasiões! Seja um festival, carnaval ou rolê com amigos!</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade2} alt="list-nossacomunidade2" />
                            </div>
                            <div>
                                <h3 className="border-title">Faça amizades e se inspire</h3>
                                <p>Siga amigos, influenciadores e marcas. Veja suas publicações e as peças usadas, se você gostou, você pode vestir em um clique.</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade3} alt="list-nossacomunidade3" />
                            </div>
                            <div>
                                <h3 className="border-title">Salve as peças que você mais gostar</h3>
                                <p>Gostou de alguma peça em específico? Deixe-a guardada em uma pasta de coleções para experimentar depois! Sempre é bom se manter preparada.</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade4} alt="list-nossacomunidade4" />
                            </div>
                            <div>
                                <h3 className="border-title">Compartilhe seus visuais! </h3>
                                <p>Faça um post ou stories com suas criações e crie tendências, participe de desafios ou peça conselhos para seus seguidores!</p>
                            </div>
                        </li>
                        <li className="flex jc-spacebetween">
                            <div className="div-image-list">
                                <img src={nossaComunidade5} alt="list-nossacomunidade5" />
                            </div>
                            <div>
                                <h3 className="border-title">Faça suas comprinhas aqui!</h3>
                                <p>Marcas de Roupa também estarão na comunidade, lançando suas coleções. Achou algo interessante? Experimente e compre diretamente no App!</p>
                            </div>
                        </li>
                    </ul>

                    {/* Componente que não faço ideia oq faz por isso não desenvolvi ainda */}

                </PlataformFeaturesList>

                <ImageAi />

            </BackgroundColorful>
            <Footer />
        </>
    )
}

export default NossaProposta;