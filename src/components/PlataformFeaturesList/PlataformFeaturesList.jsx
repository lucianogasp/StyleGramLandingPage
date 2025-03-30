import './PlataformFeaturesList.css';

// react imports
import { children } from 'react';

function PlataformFeaturesList({ children }) {

    return (
        <div className='plataform-features-list'>
            {children}
        </div>
    )
}

export default PlataformFeaturesList;