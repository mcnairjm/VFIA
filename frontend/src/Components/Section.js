import React from 'react';
import vfia from '../Assets/Images/vfia.png';
import MLA from '../Assets/Images/MLA.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Section = () => {
    return (
        <>
            <Container fluid className='section1'>
                <Row className="justify-content-md-center">
                    <Col className='image' xs={5} >
                    
                        <img src={vfia}
                            className='full-logo'/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col className='about' xs={7}> 
                        
                        <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                    </Col>   
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </>
    );
}

export default Section;

{/*  <div className='section-content' id='section2' >
                <img src={MLA} 
                    className='MLA'/>
                <div className='mla-info'>
                <h1 className='title'>Meet the Team</h1>
                <p className='text'>Assalone has extensive knowledge of Virginia’s legislative and regulatory process having served as deputy legislative director for Governor Ralph Northam’s administration. In her role, Assalone provided strategic policy guidance, developed advocacy strategies, and maintained strong legislative and stakeholder relationships to affect policy changes. Assalone’s work experience and education have charted her on a course for great success as VFIA Executive Director. She has a bachelor’s degree from the University of Wisconsin and earned her master’s degree from Virginia Commonwealth University (VCU). In addition, Assalone received a Certificate of Nonprofit Management from VCU and is a graduate of the Political Leaders Program administered by The Sorensen Institute.</p>
                <br />
                <p className='text'>In her new role, Assalone will represent and advocate for retail and wholesale food industries in the Commonwealth of Virginia. Members of VFIA represent more than 55,000 people statewide at more than 530 retail locations, and the association provides resources and public affairs support to the food industry as its members work to serve their customers and nourish local communities across the commonwealth.</p>
                </div>
            </div>
            
            <div className='section-content' id='section3'>
                <h1 className='header'>Reach Out</h1>
                <p className='text'></p>
            </div> */}