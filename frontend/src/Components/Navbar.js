import React, { Component } from 'react';
import logo from '../Assets/Images/logo.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';


export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {

    return (
        <nav className='nav' id='navbar'>
            <div className='nav-content'>
                <img
                    src={logo}
                    className='nav-logo'
                    alt='logo'
                    onClick={this.scrollToTop}
                />
                <ul className='nav-items'>
                    
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
                            Meet The Team
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='link'
                            activeClass='active'
                            to='section4'
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
            </div>
        </nav>
    )
    }
}