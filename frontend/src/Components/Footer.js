import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>  
        <Container fluid className='section4'>
            <address className='address'>
                PO Box 318 <br />
                Richmond, VA 23218 <br />
                <a href='mailto:MelissaA@VAFoodIndustry.org'>MelissaA@VAFoodIndustry.org</a><br />
                608-216-5226
            </address>

            <div className='copy'>
                &copy; 2022 VA Food Industry Association
            </div>

        </Container>
        </>
    );
}

export default Footer;