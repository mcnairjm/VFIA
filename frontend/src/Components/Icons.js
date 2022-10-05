import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiTeamFill } from 'react-icons/ri';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { GiPublicSpeaker } from 'react-icons/gi';
import { IconContext } from "react-icons";



const Icons = () => {
    return (
        <>
            <IconContext.Provider value={{ color: '#0b8441', size: '10em'}} >
            <Container className='iconBox'>
            
            

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
    </>
    )
};

export default Icons;

