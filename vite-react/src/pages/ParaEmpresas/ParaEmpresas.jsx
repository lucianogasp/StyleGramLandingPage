// import modules
import './ParaEmpresas.css';
import { useState } from 'react';
import { parEmprList } from './ParaEmpresas.data.jsx';

// import components
import { Header } from '@/components/Header/Header.jsx';
import { BackgroundColorful } from '@/components/BackgroundColorful/BackgroundColorful.jsx';
import { PlataformFeaturesList } from '@/components/PlataformFeaturesList/PlataformFeaturesList.jsx';
import { PlataformMarketImages } from '@/components/PlataformMarketImages/PlataformMarketImages.jsx';
import { Footer } from '@/components/Footer/Footer.jsx';
import { ContactModal } from '@/components/ContactModal/ContactModal.jsx';

export function ParaEmpresas() {
  const [isWrapperActive, setIsWrapperActive] = useState(false);

  const updateWrapperActive = () => {
    setIsWrapperActive(prev => !prev);
  }

  return (
    <div className='para-empresas-page'>
      <Header />
      <BackgroundColorful>
        <section className="para-empresas-plataform-section">
          <PlataformMarketImages />
          <PlataformFeaturesList updateWrapper={updateWrapperActive} featuresList={parEmprList} />
        </section>
      </BackgroundColorful>
      <Footer />
      {isWrapperActive && ( <ContactModal updateWrapper={updateWrapperActive} /> )}
    </div>
  )
}