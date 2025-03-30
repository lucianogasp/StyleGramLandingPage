import './BackgroundColorful.css';

// import Props
import { children } from 'react';

function BackgroundColorful( { incrementedClasses, children } ) {

    return (
        <div className={`background-grow-flex background-gradient-colorful ${incrementedClasses}`}>
            {children}
        </div>
    )
}

export default BackgroundColorful;