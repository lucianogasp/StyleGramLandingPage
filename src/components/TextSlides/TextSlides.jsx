import './TextSlides.css';

// react-router-dom imports
import { Link } from 'react-router-dom';

function TextSlides(props) {

    return (
        <div className="overlay grid pi-center position-absolute">
            <img id='arrow-left' src="./icons/arrow-left.png" alt="arrow-left" onClick={props.arrowLeftButton} style={{display: props.displayArrowLeft}} />
            <h1 id='text-center' className="font-shadow-yellow txtal-center">{props.text}</h1>
            <img id='arrow-right' src="./icons/arrow-right.png" alt="arrow-right" onClick={props.arrowRightButton} style={{display: props.displayArrowRight}} />

            <p id='meeting-button' style={{display: props.displayMeetingButton}}><Link to='nossa-proposta' className='login-button'>Nos conheça melhor</Link></p>
        </div>
    )
}

export default TextSlides;