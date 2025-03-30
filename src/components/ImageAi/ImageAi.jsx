import './ImageAi.css';

// import images
import AiGirl1 from '../../assets/images/ai-girl1.png';
import AiGirl2 from '../../assets/images/ai-girl2.png';
import AiJacket from '../../assets/images/ai-jacket.png';
import AiPlus from '/icons/ai-plusSign.png';
import AiArrow from '/icons/ai-arrowSign.png';

function ImageAi() {

    return (
        <div className='image-ai-div border-shadow-gray'>
            <div className='internal-div'>
                <div>
                    <img src={AiGirl1} alt="AiGirl1" />
                    <img src={AiArrow} alt="AiArrow" />
                </div>
                <img src={AiPlus} alt="AiPlus" />
                <div>
                    <img src={AiJacket} alt="AiJacket" />
                    <img src={AiArrow} alt="AiArrow" />
                </div>

            </div>
            <div className='internal-div'>
                <img src={AiGirl2} alt="AiGirl2" />
            </div>
        
        </div>
    )
}

export default ImageAi;