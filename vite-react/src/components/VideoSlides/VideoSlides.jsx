// import modules
import './VideoSlides.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sourceData } from './VideoSlides.data.jsx';

// import assets
import { arrowLeft, arrowRight } from '@/assets/icons';

export function VideoSlides() {
  const [queryId, setQueryId] = useState(1);
  const [videoReady, setVideoReady] = useState(false);

  const toLeft = () => {
    setQueryId(prev => prev - 1);
  }
  const toRight = () => {
    setQueryId(prev => prev + 1);
  }

  return (
    <div className='video-slides-wrapper'>
      <video key={queryId} autoPlay loop muted
              onCanPlay={() => setVideoReady(true)}
              className='border-shdw-yellow'>
        <source src={sourceData[queryId].videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='video-text-container'>
        <img src={arrowLeft} alt="arrow-left"
              className={sourceData[queryId].arrowLeftDisplayClass}
              onClick={toLeft}
        />
        {videoReady && (
          <h1 className='font-shdw-yellow'>{sourceData[queryId].txtSrc}</h1>
        )}
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