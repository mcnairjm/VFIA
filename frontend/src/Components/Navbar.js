import React, { Component } from 'react';
import smaller from '../Assets/Images/smaller.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';
import loadable from '@loadable/component'

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

    return (
        <>
            <Navbar className='nav' bg='white' sticky='top' expand='lg' collapseOnSelect>
                <Navbar.Brand>
                <img
                    src={smaller}
                    
                    className='nav-logo'
                    alt='logo'
                    onClick={this.scrollToTop}
                />
                </Navbar.Brand>

                <Navbar.Toggle className='toggle'/>

                <Navbar.Collapse className='tags'>
                <Nav.Link className='navLinks'>
                    <Link 
                            eventKey='1'
                            className='link'
                            activeClass='active'
                            to='section1'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={250}
                        > What We Do
                    </Link>
                    <Link
                            eventKey='2'
                            className='link'
                            activeClass='active'
                            to='section2'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Who We Are
                    </Link>
                    <Link
                            eventKey='3'
                            className='link'
                            activeClass='active'
                            to='section3'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Reach Out
                    </Link>
                </Nav.Link>
                </Navbar.Collapse>
                {/* <Nav className='navLinks'>
                    <Link 
                            className='link'
                            activeClass='active'
                            to='section1'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={250}
                        > What We Do
                    </Link>
                    <Link
                            className='link'
                            activeClass='active'
                            to='section2'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Who We Are
                    </Link>
                    <Link
                            className='link'
                            activeClass='active'
                            to='section3'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Reach Out
                    </Link>
                </Nav> */}
            </Navbar>

            
        </>
    )
    }
};
    {/* <>
         <Nav className='justify-content-center' activeKey='/home' id='navbar'>
            <Nav.Item className='nav-content'>
                <img
                    src={full}
                    className='nav-logo'
                    alt='logo'
                    onClick={this.scrollToTop}
                />
                <ul className='nav-items'>
                    
                    <li className='nav-item'>
                        <Link
                            className='link'
                            activeClass='active'
                            to='section1'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={250}
                        >
                            What We Do
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='link'
                            activeClass='active'
                            to='section2'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Who We Are
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='link'
                            activeClass='active'
                            to='section3'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Reach Out
                        </Link>
                    </li>
                    <li className='nav-item'>
                        
                    </li>
                </ul>
            </Nav.Item>
        </Nav> 
    </> */}
    
