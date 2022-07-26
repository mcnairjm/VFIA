import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import cart from '../Assets/Images/cart.jpg';
import employee from '../Assets/Images/employee.jpg';
import wine from '../Assets/Images/wine-guy.jpg';
import woman from '../Assets/Images/woman-shopper.jpg';


const Slideshow = () => {
    const images = [
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/cart1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/employee1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/wine-guy1.jpg?raw=true",
        "https://github.com/mcnairjm/VFIA/blob/b97257f52c5a97752cdc85459cf9ba1c2d26de72/frontend/src/Assets/Images/woman-shopper1.jpg?raw=true"
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
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