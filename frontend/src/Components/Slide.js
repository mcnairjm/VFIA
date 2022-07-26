import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';


const Slideshow = () => {
    const images = [
        "https://github.com/mcnairjm/VFIA/blob/335edd3950fcdaae6dbf39e5516a94d61beb90bf/frontend/src/Assets/Images/cart1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/employee1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/wine-guy1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/woman-shopper1.jpg?raw=true"
    ];

    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px',
    };

    const properties = {
        prevArrow: <button className='prevArrow' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button className='nextArrow' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    return (
        <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span className='span'>For Grocers.</span>
                    <span className='span1'>For Virginia.</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
        </Slide>
    );
};


export default Slideshow;