import React from 'react'
import "./Footer.css"
import { PiXLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div class="container-fluid bg-white pt-1 mt-4">
            <div className='container' style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                <div class="main row px-3 gap-5 gap-md-0">
                    <div class="col-lg-4 col-md">
                        <div class="content d-flex flex-column gap-3">
                            <div class="logo">
                                <h1 className='fs-2' style={{ color: "var(--black-color)" }}>iLanding</h1>
                            </div>
                            <div class="text">
                                <p className='fw-light'>A108 Adam Street</p>
                                <p className='fw-light'>New York, NY 535022</p>
                                <p><strong>Phone:</strong> +1 5589 55488 55</p>
                                <p><strong>Email:</strong>  info@example.com</p>
                            </div>
                            <div class="logos d-flex gap-3 pointer">
                                <div className="rounded-5 flex-shrink-0"><PiXLogoBold className='fs-4' /></div>
                                <div className="rounded-5 flex-shrink-0"><FaFacebook className='fs-4 ' /></div>
                                <div className="rounded-5 flex-shrink-0"><FaInstagram className='fs-4' /></div>
                                <div className="rounded-5 flex-shrink-0"><FaLinkedin className='fs-4' /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md d-flex flex-column gap-3">
                        <h2 className='fs-5' style={{ color: "var(--black-color)" }}>Useful Links</h2>
                        <div><p className='fw-light'>Home</p>
                            <p className='fw-light'>About Us</p>
                            <p className='fw-light'>Services</p>
                            <p className='fw-light'>Terms of Service</p>
                            <p className='fw-light'>Privacy Policy</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md d-flex flex-column gap-3">
                        <h2 className='fs-5' style={{ color: "var(--black-color)" }}>Our Services</h2>
                        <div><p className='fw-light'>Web Design</p>
                            <p className='fw-light'>Web Development</p>
                            <p className='fw-light'>Product Management</p>
                            <p className='fw-light'>Marketing</p>
                            <p className='fw-light'>Graphic Design</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md d-flex flex-column gap-3">
                        <h2 className='fs-5' style={{ color: "var(--black-color)" }}>Hic solutasetp</h2>
                        <div><p className='fw-light'>Molestiae accusamus iure</p>
                            <p className='fw-light'>Excepturi dignissimos</p>
                            <p className='fw-light'>Suscipit distinctio</p>
                            <p className='fw-light'>Dilecta</p>
                            <p className='fw-light'>Sit quas consectetur</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md d-flex flex-column gap-3">
                        <h2 className='fs-5' style={{ color: "var(--black-color)" }}>Nobis illum</h2>
                        <div><p className='fw-light'>Ipsam</p>
                            <p className='fw-light'>Laudantium dolorum</p>
                            <p className='fw-light'>Dinera</p>
                            <p className='fw-light'>Trodelas</p>
                            <p className='fw-light'>Flexo</p>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <p className='text-center p-3'>© Copyright <strong>iLanding</strong> All Rights Reserved <br />
                        Designed by <span className='pointer' style={{color:"var(--main-color)"}}>BootstrapMade</span>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default Footer