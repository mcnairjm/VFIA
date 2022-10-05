import React, { useEffect } from 'react';
import MLA from '../Assets/Images/MLA.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
        <ScrollAnimation duration={2}
                animateIn='animate__fadeInUp'
                animateOnce='true'
                delay={2}>
                <Container fluid className='section2'>
                    <Row id='row4'>
                        <Col xs={12} sm={4} md={4}>
                            <img src={MLA}
                            className='MLA'></img>
                        </Col>
                        <Col className='space' xs lg='1'></Col>
                        <Col xs lg='9'>
                            <p className='mla-text'>VFIA Executive Director, Melissa Assalone, oversees the day-to-day operations of the Association. In addition, Melissa serves as the primary lobbyist for the Virginia Food Industry Association to the General Assembly. She also works on grocery-specific issues like food safety, emergency preparedness and response, and SNAP and WIC. Melissa brings VFIA expertise in Virginia’s legislative and regulatory processes having served as deputy legislative director for Governor Ralph Northam’s administration. Melissa also served as the Director of Government Relations for the American Heart Association. She has a bachelor’s degree from the University of Wisconsin and a master’s degree from Virginia Commonwealth University (VCU). In addition, Assalone received a Certificate of Nonprofit Management from VCU and is a graduate of the Political Leaders Program administered by The Sorenson Institute.</p>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
    )
};

export default About;






