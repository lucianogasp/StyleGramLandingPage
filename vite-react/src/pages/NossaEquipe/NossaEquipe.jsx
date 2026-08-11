// import modules
import './NossaEquipe.css';
import { featuringHeitor, featuringMateus, featuringLuciano } from './NossaEquipe.data.jsx';

// import components
import { Header } from '@/components/Header/Header.jsx';
import { Footer } from '@/components/Footer/Footer.jsx';
import { BackgroundColorful } from '@/components/BackgroundColorful/BackgroundColorful.jsx';
import { Featuring } from '@/components/Featuring/Featuring.jsx';


export function NossaEquipe() {
  return (
    <div className='nossa-equipe-page'>
      <Header />
      <BackgroundColorful>
        <section className='nossa-equipe-featuring-section'>
          <Featuring featuringContent={featuringHeitor}/>
          <Featuring featuringContent={featuringMateus}/>
          <Featuring featuringContent={featuringLuciano}/>
        </section>
      </BackgroundColorful>
      <Footer />
    </div>
  )
}