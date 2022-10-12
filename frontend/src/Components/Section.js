import React, { useEffect } from 'react';
import vfia from '../Assets/Images/vfia.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';
import WebFont from 'webfontloader';




const Section = () => {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat:wght@100&display=swap']
            }
        });
    });
    return (
        <>
            <div className='desktop'>
            <ScrollAnimation duration={2}
                animateIn='animate__fadeInUp'
                animateOnce='true'
                >
                <Container fluid className='section1'>
                
                    <Row className="justify-content-md-center">
                        <Col className='image' xs={5} >
                        
                        
                            <img src={vfia}
                                height='150px'
                                alt='VFIA Logo'
                                className='full-logo'/>
                        
                        </Col>
                    </Row>
                
                    <Row className="justify-content-md-center" id='row2'>
                        <Col className='about' xs={7}> 
                            
                            <p className='info'>The Virginia Food Industry Association (VFIA) is a nonprofit trade association that serves as an advocate for the retail and wholesale food industries in the Commonwealth of Virginia. Collectively, VFIA’s members employ more than 50,000 people statewide at more than 530 retail locations. </p> 
                        </Col>   
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
        <div className='mobile'>
            <Container fluid className='section1'>
                    
                        <Row className="justify-content-md-center">
                            <Col className='image' xs={5} >
                            
                            
                                <img src={vfia}
                                    height='150px'
                                    alt='VFIA Logo'
                                    className='full-logo'/>
                            
                            </Col>
                        </Row>
                    
                        <Row className="justify-content-md-center" id='row2'>
                            <Col className='about' xs={7}> 
                                
                                <p className='info'>The Virginia Food Industry Association (VFIA) is a nonprofit trade association that serves as an advocate for the retail and wholesale food industries in the Commonwealth of Virginia. Collectively, VFIA’s members employ more than 50,000 people statewide at more than 530 retail locations. </p> 
                            </Col>   
                        </Row>
                    </Container>
            </div>


        </>
    )
    };
export default Section;
            
       {/*  <IconContext.Provider value={{ color: '#0b8441', size: '10em'}} >
            <Container>
            
            

                <Row className='justify-content-md-center' id='row3'>
                    <Col className='icons'><RiTeamFill />
                    <p className='subhead'>Networking</p>
                    </Col>
                        
                    <Col className='icons'><BsFillQuestionCircleFill />
                    <p className='subhead'>Resources</p>
                    </Col>
                        
                    <Col className='icons'><GiPublicSpeaker />
                    <p className='subhead'>Representation</p>
                    </Col>        
                </Row>
            
            </Container>
        </IconContext.Provider>
            <ScrollAnimation duration={2}
                animateIn='animate__fadeInUp'
                animateOnce='true'
                delay={2}>
                <Container fluid className='section2'>
                    <Row className="justify-content-md-center" id='row4'>
                        <Col xs lg='3'>
                            <img src={MLA}
                            className='MLA'></img>
                        </Col>
                        <Col xs lg='1'></Col>
                        <Col xs lg='5'>
                            <p className='mla-text'>VFIA Executive Director, Melissa Assalone, oversees the day-to-day operations of the Association. In addition, Melissa serves as the primary lobbyist for the Virginia Food Industry Association to the General Assembly. She also works on grocery-specific issues like food safety, emergency preparedness and response, and SNAP and WIC. Melissa brings VFIA expertise in Virginia’s legislative and regulatory processes having served as deputy legislative director for Governor Ralph Northam’s administration. Melissa also served as the Director of Government Relations for the American Heart Association. She has a bachelor’s degree from the University of Wisconsin and a master’s degree from Virginia Commonwealth University (VCU). In addition, Assalone received a Certificate of Nonprofit Management from VCU and is a graduate of the Political Leaders Program administered by The Sorenson Institute.</p>
                        </Col>
                    </Row>
                </Container>
            </ScrollAnimation>
        </div>
        </>
    );
} */}



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