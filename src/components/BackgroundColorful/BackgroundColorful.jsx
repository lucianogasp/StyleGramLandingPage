import './BackgroundColorful.css';

// import Props
import { children } from 'react';

function BackgroundColorful( { children } ) {

    return (
        <section className='background-gradient-colorful grid pc-center'>
            {children}
        </section>
    )
}

export default BackgroundColorful;