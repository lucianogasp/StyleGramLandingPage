import './VideoSlides.css';

function VideoSlides() {

    return (
        <section>
            <div className="video-section background-gradient-colorful">

                <video autoPlay loop muted id="video1" className="border-shadow-gray">
                    <source src="./videos/video1.mp4" type="video/mp4" />
                    vídeo com problema
                </video>
                <video autoPlay loop muted id="video2" className="border-shadow-gray">
                    <source src="./videos/video2.mp4" type="video/mp4" />
                    vídeo com problema
                </video>
                <video autoPlay loop muted id="video3" className="border-shadow-gray">
                    <source src="./videos/video3.mp4" type="video/mp4" />
                    vídeo com problema
                </video>
                <video autoPlay loop muted id="video4" className="border-shadow-gray">
                    <source src="./videos/video4.mp4" type="video/mp4" />
                    vídeo com problema
                </video>
                <video autoPlay loop muted id="video5" className="border-shadow-gray">
                    <source src="./videos/video5.mp4" type="video/mp4" />
                    vídeo com problema
                </video>
        
                <div className="overlay grid-3-columns">
                    <img id="arrow-left" src="./assets/arrow-left.png" alt="arrow" />
        
                    <h1 id="text1" className="font-shadow-yellow">Uma nova forma de ver seu Guarda Roupa</h1>
                    <h1 id="text2" className="font-shadow-yellow">Uma nova forma de provar suas roupas</h1>
                    <h1 id="text3" className="font-shadow-yellow">Uma nova forma de fazer compras online</h1>
                    <h1 id="text4" className="font-shadow-yellow">Uma nova forma de divulgar seus looks</h1>
                    <h1 id="text5" className="font-shadow-yellow">Uma nova forma de interagir</h1>
        
                    <img id="arrow-right" src="./assets/arrow-right.png" alt="arrow" />
        
                    <a id="meetingButton" className="login-button" href="#nossa-comunidade">Nos conheça melhor</a>
                </div>

            </div>
        </section>
    )
}

export default VideoSlides;