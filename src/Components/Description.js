import React from 'react';
import LogoBlack from '../images/MONO BLACK.png';

import '../CSS/descriptionStyle.css';

const Description = () => {
    return (
    <div className="description">
        <div className='logo-2-container'>
            <img id='logo-2' src={LogoBlack} alt='Logo' />
        </div>
        <div>
            <p>TACO NOT TACO serves traditional Mexican tacos with non-traditional fillings. We Serve Our Tacos from an iconic Mercedes 508D</p>
        </div>
    </div>
    )
}


export default Description;
