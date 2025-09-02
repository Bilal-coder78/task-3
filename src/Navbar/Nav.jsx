import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'

function Nav() {
    let mobile = useRef()
    let menu = useRef()
    let backdrop = useRef()
    return (
        <div className="section">
            <nav className=' nav-bar rounded-5 navbar-expand-lg shadow mt-4 container d-flex align-items-center justify-content-between'>
                <div className="navbar-brand p-4 fs-5">iLanding</div>
                <div className="middle-nav">
                    <ul className='navbar-nav gap-4 d-none d-lg-flex'>
                        <Link to='home' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Home</li></Link>
                        <Link to='about' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>About</li></Link>
                        <Link to='service' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Services</li></Link>
                        <Link to='contact' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="right-nav w-auto d-flex align-items-center justify-content-center gap-3">
                    <Link to='about'><button className='btn btn-primary d-none d-lg-block rounded-5'>Get Started</button></Link>
                    <Link to='about'><button className='btn btn-primary d-block d-lg-none rounded-5'>Get Started</button></Link>
                
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
                <div className="mobile d-flex d-lg-none" ref={mobile}>
                    <ul className='navbar-nav gap-4'>
                        <Link to='home' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Home</li></Link>
                        <Link to='about' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>About</li></Link>
                        <Link to='service' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Services</li></Link>
                        <Link to='contact' activeClass='active' spy={true} smooth={true} duration={600} className='nav-item pointer text-decoration-none text-black'><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="backdrop d-lg-none" ref={backdrop}></div>
            </nav>
            </div>
    )
}

export default Nav