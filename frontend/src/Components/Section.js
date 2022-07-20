import React from 'react';
import logo from '../Assets/Images/logo.jpg';
import MLA from '../Assets/Images/MLA.jpg';

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

            <div className='section-dark' id='section2' >
                <img src={MLA} 
                    className='MLA'/>
                <div className='mla-info'>
                <h1 className='title'>Meet the Team</h1>
                <p className='mla-text'>Assalone has extensive knowledge of Virginia’s legislative and regulatory process having served as deputy legislative director for Governor Ralph Northam’s administration. In her role, Assalone provided strategic policy guidance, developed advocacy strategies, and maintained strong legislative and stakeholder relationships to affect policy changes. Assalone’s work experience and education have charted her on a course for great success as VFIA Executive Director. She has a bachelor’s degree from the University of Wisconsin and earned her master’s degree from Virginia Commonwealth University (VCU). In addition, Assalone received a Certificate of Nonprofit Management from VCU and is a graduate of the Political Leaders Program administered by The Sorensen Institute.</p>
                <br />
                <p className='mla-text'>In her new role, Assalone will represent and advocate for retail and wholesale food industries in the Commonwealth of Virginia. Members of VFIA represent more than 55,000 people statewide at more than 530 retail locations, and the association provides resources and public affairs support to the food industry as its members work to serve their customers and nourish local communities across the commonwealth.</p>
                </div>
            </div>
            
            <div className='section-content' id='section3'>
                <h1 className='header'>Reach Out</h1>
                <p className='text'></p>
            </div>
        </div>

    );
}

export default Section;