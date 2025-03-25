import './VideoSlides.css';

// import components
import TextSlides from '../TextSlides/TextSlides.jsx';

// import Hooks
import { useState } from 'react';

function VideoSlides() {

    const sourceList = [
        'video1',
        'video2',
        'video3',
        'video4',
        'video5'
    ]
    const textList = [
        'Uma nova forma de ver seu Guarda Roupa',
        'Uma nova forma de provar suas roupas',
        'Uma nova forma de fazer compras online',
        'Uma nova forma de interagir'
    ]

    const [source, setSource] = useState(sourceList[0]);
    const [text, setText] = useState(textList[0]);
    const [displayArrowLeft, setDisplayArrowLeft] = useState('none');
    const [displayArrowRight, setDisplayArrowRight] = useState('block');
    const [displayMeetingButton, setDisplayMeetingButton] = useState('none');

    function arrowLeftButton() {
        setSource( prevSource => {
            const index = sourceList.findIndex(el => el == prevSource);
            const newSource = sourceList[index - 1] || prevState;

            setDisplayArrowLeft( index - 1 > 0 ? 'block' : 'none');
            setDisplayArrowRight('block');
            setDisplayMeetingButton('none');

            return newSource;
        })
        setText( prevState => {
            const index = textList.findIndex(el => el == prevState);
            return textList[index - 1] || prevState;
        })
    }
    function arrowRightButton() {
        setSource( prevState => {
            const index = sourceList.findIndex(el => el == prevState);
            const newSource = sourceList[index + 1] || prevState;

            setDisplayArrowLeft('block');
            setDisplayArrowRight( index + 1 < sourceList.length - 1 ? 'block' : 'none');
            setDisplayMeetingButton( index + 1 < sourceList.length - 1 ? 'none' : 'block');


            return newSource;
        })
        setText( prevState => {
            const index = textList.findIndex(el => el == prevState);
            return textList[index + 1] || prevState;
        })
    }

    return (
        <div className="video-slides grid pc-center position-relative">
            <video key={source} autoPlay loop muted className="border-shadow-gray">
                <source src={`./videos/${source}.mp4`} type="video/mp4" />
                vídeo com problema
            </video>

            <TextSlides 
                text={text}
                arrowLeftButton={arrowLeftButton} 
                arrowRightButton={arrowRightButton} 
                displayArrowLeft={displayArrowLeft} 
                displayArrowRight={displayArrowRight} 
                displayMeetingButton={displayMeetingButton}
            />
        </div>
    )
}

export default VideoSlides;