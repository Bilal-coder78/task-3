import React from 'react'
import "./Contact.css"
import { SlLocationPin } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
    return (
        <div className='container'style={{marginTop:"6rem"}}>
            <h1 className='text-center' style={{color:"var(--black-color)"}}>Contact</h1>
            <p className='text-center mb-5 mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="row">
                <div className="col-lg-5 ">
                    <div className="contact-box text-white p-5 rounded-4 d-flex flex-column gap-3"style={{backgroundColor:"#0d83fd"}}>
                        <h3>Contact Info</h3>
                        <p className='fw-light'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
                        <div className="icon-box d-flex gap-3">
                            <div className="rounded-5 one"><SlLocationPin className='fs-4 two' /></div>
                            <div className="content">
                                <h4>Our Location</h4>
                                <p className='fw-light'>A108 Adam Stree</p>
                                <p className='fw-light'>New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="icon-box d-flex gap-3">
                            <div className="rounded-5 one"><IoCall className='fs-4 two' /></div>
                            <div className="content">
                                <h4>Phone Number</h4>
                                <p className='fw-light'>+1 5589 55488 55</p>
                                <p className='fw-light'>+1 6678 254445 41</p>
                            </div>
                        </div>
                        <div className="icon-box d-flex gap-3">
                            <div className="rounded-5 one"><MdOutlineMailOutline className='fs-4 two' /></div>
                            <div className="content">
                                <h4>Email Address</h4>
                                <p className='fw-light'>info@example.com</p>
                                <p className='fw-light'>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    
                </div>
            </div>
        </div>
    )
}

export default Contact