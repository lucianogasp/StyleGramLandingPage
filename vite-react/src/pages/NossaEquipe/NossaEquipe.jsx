// import modules
import './NossaEquipe.css';

// import components
import { Header } from '@/components/Header/Header.jsx';
import { Footer } from '@/components/Footer/Footer.jsx';
import { BackgroundColorful } from '@/components/BackgroundColorful/BackgroundColorful.jsx';
import { Featuring } from '@/components/Featuring/Featuring.jsx';

// import assets
import { heitorFt, mateusFt, lucianoFt } from '@/assets/images';

const featuringHeitor = {
  image: heitorFt,
  imageAlt: 'heitor-ft',
  title: 'Heitor Maia Henriques Malveira',
  subtitle: 'Encontrar no LinkedIn',
  lead: 'CEO - StyleGram'
};
const featuringMateus = {
  image: mateusFt,
  imageAlt: 'mateus-ft',
  title: 'Mateus Fernandes de Souza',
  subtitle: 'Encontrar no LinkedIn',
  lead: 'CTO - StyleGram'
};
const featuringLuciano = {
  image: lucianoFt,
  imageAlt: 'luciano-ft',
  title: 'Luciano Augusto Gasparin',
  subtitle: 'Encontrar no LinkedIn',
  lead: 'CIO - StyleGram'
};

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