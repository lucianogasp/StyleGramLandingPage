// import modules
import './PlataformImages.css';

// import assets
import { aiGirl1 } from '@/assets/images';
import { aiGirl2 } from '@/assets/images';
import { aiJacket } from '@/assets/images';
import { aiArrowSign } from '@/assets/icons';
import { aiPlusSign } from '@/assets/icons';

export function PlataformImages() {
  return (
    <section className="plataform-images-section border-shdw-yellow">
      <div className='cell-top-left border-shdw-yellow'>
        <img src={aiGirl1} alt="ai girl 1" />
      </div>
      <div className='cell-top-center'>
        <img src={aiPlusSign} alt="ai plus sign" />
        </div>
      <div className='cell-top-right border-shdw-yellow'>
        <img src={aiJacket} alt="ai jacket" />
        </div>
      <div className='cell-mid-left'>
        <img src={aiArrowSign} alt="ai arrow sign" />
        </div>
      <div className='cell-mid-right'>
        <img src={aiArrowSign} alt="ai arrow sign" />
        </div>
      <div className='cell-bottom border-shdw-yellow'>
        <img src={aiGirl2} alt="ai girl 2" />
        </div>
    </section>
  )
}