// import modules
import './NossaProposta.css';

// import components
import { Header } from "@/components/Header/Header.jsx";
import { BackgroundColorful } from "@/components/BackgroundColorful/BackgroundColorful.jsx";
import { PlataformFeaturesList } from "@/components/PlataformFeaturesList/PlataformFeaturesList.jsx";
import { PlataformImages } from "@/components/PlataformImages/PlataformImages.jsx";
import { Footer } from "@/components/Footer/Footer.jsx";

// import assets
import { figNosComun1, figNosComun2, figNosComun3, figNosComun4, figNosComun5 } from '@/assets/images';

const nosComunList = {
  headerSection: {
    title: 'Nós somos uma Comunidade!',
    lead: 'A StyleGram é uma rede social para você libertar sua criatividade e experimentar combinações de roupas e compartilhar seus looks!'
  },
  listSection: [
    {
      id: 1,
      image: figNosComun1,
      imageAlt: 'nossa-comunidade-1',
      title: 'Seu Guarda-Roupa virtual',
      text: 'Tire fotos das suas roupas e monte seu Closet Virtual para todas as ocasiões! Seja um festival, carnaval ou rolê com amigos!'
    },
    {
      id: 2,
      image: figNosComun2,
      imageAlt: 'nossa-comunidade-2',
      title: 'Faça amizades e se inspire',
      text: 'Siga amigos, influenciadores e marcas. Veja suas publicações e as peças usadas, se você gostou, você pode vestir em um clique.'
    },
    {
      id: 3,
      image: figNosComun3,
      imageAlt: 'nossa-comunidade-3',
      title: 'Salve as peças que você mais gostar',
      text: 'Gostou de alguma peça em específico? Deixe-a guardada em uma pasta de coleções para experimentar depois! Sempre é bom se manter preparada.'
    },
    {
      id: 4,
      image: figNosComun4,
      imageAlt: 'nossa-comunidade-4',
      title: 'Compartilhe seus visuais!',
      text: 'Faça um post ou stories com suas criações e crie tendências, participe de desafios ou peça conselhos para seus seguidores!'
    },
    {
      id: 5,
      image: figNosComun5,
      imageAlt: 'nossa-comunidade-5',
      title: 'Faça suas comprinhas aqui!',
      text: 'Marcas de Roupa também estarão na comunidade, lançando suas coleções. Achou algo interessante? Experimente e compre diretamente no App!'
    }
  ],
  footerSection: {
    text1: 'Gostou do que viu?',
    text2: 'Demonstre aqui seu interesse'
  }
}

export function NossaProposta() {
  return (
    <div className='nossa-proposta-page'>
      <Header />
      <BackgroundColorful>
        <section className="nossa-proposta-plataform-section">
          <PlataformFeaturesList featuresList={nosComunList} />
          <PlataformImages />
        </section>
      </BackgroundColorful>
      <Footer />
    </div>
  )
}