import React from 'react'
import "./Contact.css"
import { SlLocationPin } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
    return (
            <div className='container' id='contact' style={{ marginTop: "6rem" }}>
                <h1 className='text-center' style={{ color: "var(--black-color)" }}>Contact</h1>
                <p className='text-center mb-5 mt-3'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                <div className="row">
                    <div className="col-lg-5 ">
                        <div className="contact-box mb-5 text-white p-5 rounded-4 d-flex flex-column gap-4" style={{ backgroundColor: "#0d83fd" }}>
                            <h3>Contact Info</h3>
                            <p className='fw-light'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
                            <div className="icon-box d-flex gap-3">
                                <div className="rounded-5 one flex-shrink-0"><SlLocationPin className='fs-4 two' /></div>
                                <div className="content">
                                    <h4>Our Location</h4>
                                    <p className='fw-light'>A108 Adam Stree</p>
                                    <p className='fw-light'>New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="icon-box d-flex gap-3">
                                <div className="rounded-5 one flex-shrink-0"><IoCall className='fs-4 two' /></div>
                                <div className="content">
                                    <h4>Phone Number</h4>
                                    <p className='fw-light'>+1 5589 55488 55</p>
                                    <p className='fw-light'>+1 6678 254445 41</p>
                                </div>
                            </div>
                            <div className="icon-box d-flex gap-3">
                                <div className="rounded-5 flex-shrink-0 one"><MdOutlineMailOutline className='fs-4 two' /></div>
                                <div className="content">
                                    <h4>Email Address</h4>
                                    <p className='fw-light'>info@e.com</p>
                                    <p className='fw-light'>contact@e.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form bg-white p-5 rounded-4 d-flex flex-column gap-2">
                            <div className="content d-flex flex-column gap-2">
                            <h3 className='fw-medium' style={{ color: "var(--black-color)" }}>Get In Touch</h3>
                            <p className='fw-light'>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.</p>
                            </div>
                            <form className='form d-flex flex-column gap-3'>
                                <input className='p-3' type="text" placeholder='Your Name'/>
                                <input className='p-3 ' type="email" placeholder='Your Email'/>
                                <input className='p-3' type="text" placeholder='Subject'/>
                                <textarea name="" className='p-2' placeholder='Message' id="" cols="29" rows="6"></textarea>
                                <div className="d-flex justify-content-center"><button className='btn btn-primary p-3 rounded-5'>Send Message</button></div>
                            </form>
                            {/* <form className='form d-flex flex-column gap-4'>
                                <div className='flex-lg-row flex-column'>
                                <input className='p-3' type="text" placeholder='Your Name'/>
                                <input className='p-3 mx-lg-3 mt-4 mt-lg-0' type="email" placeholder='Your Email'/>
                                </div>
                                <input className='p-3' type="text" placeholder='Subject'/>
                                <textarea name="" className='p-2' placeholder='Message' id="" cols="29" rows="6"></textarea>
                                <div className="d-flex justify-content-center"><button className='btn btn-primary p-3 rounded-5'>Send Message</button></div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact