import React from 'react';
import logo from '../Assets/Images/logo.jpg';

const Section = () => {
    return (
        <div>
            <div className='section-content' id='section1'>
                <img src={logo}
                     className='full-logo'/>
                <div className='info'>
                    <h1 className='title'>Who We Are</h1>
                    <p className='text'>The Virginia Food Industry Association (VFIA) was formed to be the leading advocate for retail and wholesale food industries in the commonwealth of Virginia. With members representing more than 55,000 people statewide at more than 530 retail locations, the association provides resources and public affairs support to the food industry as its members work to serve their customers and nourish local communities across the commonwealth.  </p>
                </div>
            </div>

            <div className='section-dark' id='section2'>
                <h1 className='header'>Meet the Team</h1>
                <p className='text'></p>
            </div>
            
            <div className='section-content' id='section3'>
                <h1 className='header'>Reach Out</h1>
                <p className='text'></p>
            </div>
        </div>

    );
}

export default Section;