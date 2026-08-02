// import modules
import './VideoSlides.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import assets
import { arrowLeft, arrowRight } from '@/assets/icons';

const sourceData = {
  1: {
    arrowLeftDisplayClass: 'arrow hidden',
    arrowRightDisplayClass: 'arrow revealed',
    videoSrc: './videos/video1.mp4',
    txtSrc: 'Uma nova forma de ver seu Guarda Roupa'
  },
  2: {
    arrowLeftDisplayClass: 'arrow revealed',
    arrowRightDisplayClass: 'arrow revealed',
    videoSrc: './videos/video2.mp4',
    txtSrc: 'Uma nova forma de provar suas roupas'
  },
  3: {
    arrowLeftDisplayClass: 'arrow revealed',
    arrowRightDisplayClass: 'arrow revealed',
    videoSrc: './videos/video3.mp4',
    txtSrc: 'Uma nova forma de fazer compras online'
  },
  4: {
    arrowLeftDisplayClass: 'arrow revealed',
    arrowRightDisplayClass: 'arrow revealed',
    videoSrc: './videos/video4.mp4',
    txtSrc: 'Uma nova forma de divulgar seus looks'
  },
  5: {
    arrowLeftDisplayClass: 'arrow revealed',
    arrowRightDisplayClass: 'arrow hidden',
    videoSrc: './videos/video5.mp4',
    txtSrc: 'Uma nova forma de interagir',
    paragraphButton: true
  }
}

export function VideoSlides() {
  const [queryId, setQueryId] = useState(1)

  const toLeft = () => {
    setQueryId(prev => prev - 1);
  }
  const toRight = () => {
    setQueryId(prev => prev + 1);
  }

  return (
    <div className='video-slides-wrapper'>
      <video key={queryId} autoPlay loop muted
              className='border-shdw-gray'
      >
        <source src={sourceData[queryId].videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='video-text-container'>
        <img src={arrowLeft} alt="arrow-left"
              className={sourceData[queryId].arrowLeftDisplayClass}
              onClick={toLeft}
        />
        <h1 className='font-shdw-yellow'>{sourceData[queryId].txtSrc}</h1>
        <img src={arrowRight} alt="arrow-right" 
              className={sourceData[queryId].arrowRightDisplayClass}
              onClick={toRight}
        />
        {sourceData[queryId]?.paragraphButton && (
          <p >
            <Link className='login-button' to='nossa-proposta'>Nos conheça melhor</Link>
          </p>
        )}
      </div>
    </div>
  )
}