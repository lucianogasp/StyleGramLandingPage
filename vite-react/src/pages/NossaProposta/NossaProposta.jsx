// import modules
import './NossaProposta.css';
import { useState } from 'react';
import { nosComunList } from './NossaProposta.data.jsx';

// import components
import { Header } from "@/components/Header/Header.jsx";
import { BackgroundColorful } from "@/components/BackgroundColorful/BackgroundColorful.jsx";
import { PlataformFeaturesList } from "@/components/PlataformFeaturesList/PlataformFeaturesList.jsx";
import { PlataformIaImages } from "@/components/PlataformIaImages/PlataformIaImages.jsx";
import { Footer } from "@/components/Footer/Footer.jsx";
import { ContactModal } from '@/components/ContactModal/ContactModal.jsx';

export function NossaProposta() {
  const [isWrapperActive, setIsWrapperActive] = useState(false);

  const updateWrapperActive = () => {
    setIsWrapperActive(prev => !prev);
  }

  return (
    <div className='nossa-proposta-page'>
      <Header />
      <BackgroundColorful>
        <section className="nossa-proposta-plataform-section">
          <PlataformFeaturesList updateWrapper={updateWrapperActive} featuresList={nosComunList} />
          <PlataformIaImages />
        </section>
      </BackgroundColorful>
      <Footer />
      {isWrapperActive && ( <ContactModal updateWrapper={updateWrapperActive} /> )}
    </div>
  )
}
