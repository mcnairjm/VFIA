import React, { Component } from 'react';
import full from '../Assets/Images/full.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';


export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

    return (
    <>
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
                            duration={500}
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
    </>
    )
    }
}