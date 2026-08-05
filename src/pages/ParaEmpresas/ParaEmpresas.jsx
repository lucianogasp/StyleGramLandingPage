// import modules
import './ParaEmpresas.css';

// import components
import { Header } from '@/components/Header/Header.jsx';
import { BackgroundColorful } from '@/components/BackgroundColorful/BackgroundColorful.jsx';
import { PlataformFeaturesList } from '@/components/PlataformFeaturesList/PlataformFeaturesList.jsx';
import { PlataformMarketImages } from '@/components/PlataformMarketImages/PlataformMarketImages.jsx';
import { Footer } from '@/components/Footer/Footer.jsx';

// import assets
import { figParEmpr1, figParEmpr2, figParEmpr3, figParEmpr4, figParEmpr5 } from '@/assets/images';

const parEmprList = {
  headerSection: {
    title: 'Somos um Espaço para Conexões',
    lead: 'Com a StyleGram, sua Empresa estará se conectando com milhões de usuários apaixonados por moda e formas de se expressar!'
  },
  listSection: [
    {
      id: 1,
      image: figParEmpr1,
      imageAlt: 'para-empresas-1',
      title: 'Sua Nova Linha de Roupas aqui',
      text: 'Adicione suas Coleções em nossa plataforma e permita que os usuários interajam e se divirtam com o que vocês têm para oferecer.'
    },    
    {
      id: 2,
      image: figParEmpr2,
      imageAlt: 'para-empresas-2',
      title: 'Lance desafios e aumente engajamento',
      text: 'Você pode criar competições de quem usou melhor a roupa escolhida ou quem demonstrou maior criatividade na construção de looks!'
    },    
    {
      id: 3,
      image: figParEmpr3,
      imageAlt: 'para-empresas-3',
      title: 'Tenha mais proximidade com seus Clientes',
      text: 'O app é nichado para amantes da moda, uma oportunidade incrível para estreitar esse vínculo.'
    },    
    {
      id: 4,
      image: figParEmpr4,
      imageAlt: 'para-empresas-4',
      title: 'Receba Insights e Feedbacks',
      text: 'Quer criar uma nova Linha, mas ainda não sabe como será a reação do público? Teste aqui antes de lançar no Varejo.'
    },    
    {
      id: 5,
      image: figParEmpr5,
      imageAlt: 'para-empresas-5',
      title: 'Faça suas vendas aqui!',
      text: 'O melhor de tudo! Quem gostou do que provou, pode simplesmente comprar diretamente em nossa plataforma.'
    },    
  ],
  footerSection: {
    text1: 'Gostou do que viu?',
    text2: 'Demonstre aqui seu interesse'
  }
};

export function ParaEmpresas() {
  return (
    <div className='para-empresas-page'>
      <Header />
      <BackgroundColorful>
        <section className="para-empresas-plataform-section">
          <PlataformMarketImages />
          <PlataformFeaturesList featuresList={parEmprList} />
        </section>
      </BackgroundColorful>
      <Footer />
    </div>
  )
}