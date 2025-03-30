// import components
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import BackgroundColorful from '../../components/BackgroundColorful/BackgroundColorful.jsx';
import VideoSlides from '../../components/VideoSlides/VideoSlides.jsx';

function Home() {

    return (
        <>
            <Header />
            <BackgroundColorful incrementedClasses='grid pc-center' >
                <VideoSlides />
            </BackgroundColorful>
            <Footer />
        </>
    )
}

export default Home;