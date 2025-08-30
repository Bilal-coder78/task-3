import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'

function Nav() {
    let mobile = useRef()
    let menu = useRef()
    let backdrop = useRef()
    return (
        <div class="section">
            <nav className=' nav-bar rounded-5 navbar-expand-lg bg-light shadow mt-4 container d-flex align-items-center justify-content-between'>
                <div class="navbar-brand p-4">iLanding</div>
                <div class="middle-nav">
                    <ul className='navbar-nav gap-4 d-none d-lg-flex'>
                        <Link id='home' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Home</li></Link>
                        <Link id='about' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>About</li></Link>
                        <Link id='service' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Services</li></Link>
                        <Link id='contact' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Contact</li></Link>
                    </ul>
                </div>
                <div class="right-nav p-4 d-flex align-items-center justify-content-center gap-3">
                    <button className='btn btn-primary d-none d-lg-block'>Get Started</button>
                    <button className="btn btn-primary d-lg-none">Get Started</button>
                
                <div className="hamburger d-flex d-lg-none" ref={menu} onClick={() => {
                    mobile.current.classList.toggle("active-mobile")
                    menu.current.classList.toggle("active-ham")
                    backdrop.current.classList.toggle("active-backdrop")
                }}>
                    <div className="ham2"></div>
                    <div className="ham2"></div>
                    <div className="ham2"></div>
                </div>
                </div>
                <div class="mobile d-flex d-lg-none" ref={mobile}>
                    <ul className='navbar-nav gap-4'>
                        <Link id='home' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Home</li></Link>
                        <Link id='about' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>About</li></Link>
                        <Link id='service' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Services</li></Link>
                        <Link id='contact' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="backdrop d-lg-none" ref={backdrop}></div>
            </nav>
            </div>
    )
}

export default Nav