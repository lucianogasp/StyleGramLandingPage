// import modules
import './PlataformMarketImages.css';

// import assets
import { market1 } from '@/assets/images';
import { market2 } from '@/assets/images';

export function PlataformMarketImages() {
  return (
    <section className='plataform-market-images-section'>
      <img className='image1' src={market1} alt="market-1" />
      <img className='image2' src={market2} alt="market-2" />
    </section>
  )
}
