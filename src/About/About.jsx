import React from 'react'
import image2 from "../assets/avatar-1.webp"
import about1 from "../assets/about-5.webp"
import about2 from "../assets/about-2.webp"
import { IoCall } from "react-icons/io5";

function About() {
    return (
        <div id='about' className='container my-4'>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <h3 className='fs-5 fw-semibold mt-4' style={{ color: "var(--main-color)" }}>More About Us</h3>
                    <h2 className='fs-4 fw-semibold mt-3' style={{ color: "var(--black-color)" }}>Voluptas enim suscipit temporibus</h2>
                    <p className='mt-3 mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div className="row mb-4">
                        <div className="col-lg-6">
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Lorem ipsum dolor sit amet</p>
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Consectetur adipiscing elit</p>
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Sed do eiusmod tempor</p>
                        </div>
                        <div className="col-lg-6">
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Incididunt ut labore et</p>
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Dolore magna aliqua</p>
                            <p><i className="bi bi-check-circle-fill text-primary fs-5 me-2"></i>Ut enim ad minim veniam</p>
                        </div>
                    </div>
                    <div className="contact d-flex gap-5 flex-lg-row flex-column">
                        <div className="contact1 d-flex align-items-center justify-content-center gap-3">
                            <img src={image2} alt="" style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }} />
                            <div className="">
                                <p>Mario Smith</p>
                                <p style={{ color: "var(--main-color)" }}>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="contact2 shadow-lg py-2 px-4 gap-3 d-flex align-items-center justify-content-center">
                            <IoCall className='text-primary fs-3' />
                            <div className="">
                                <p>Call us anytime</p>
                                <span className='fw-bold' style={{ color: "var(--black-color)" }}>+123 456-789</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5 col-lg-6 col-12 d-flex align-items-center justify-content-center">
                    <div className="position-relative">
                        <img src={about1} alt="" className=' w-100 img-fluid rounded-4' />
                        <img src={about2} alt="" className=' d-none d-lg-block position-absolute img-fluid rounded-4' style={{width: "40%",top:"65px",left:"-6%"}}/>
                        <div className="position-absolute d-none d-lg-block rounded-4 bottom-0 end-0 m-3 p-4 bg-primary text-white">
                            <h5 className="mb-0 fw-medium text-center">15+ Years</h5>
                            <p className="mb-0 text-center">of experience in business service</p>
                        </div>
                        <img src={about2} alt="" className='w-100 d-lg-none d-block img-fluid rounded-4 my-4' />
                        <div className="d-lg-none d-block rounded-4 m-3 p-4 bg-primary text-white">
                            <h5 className="mb-0 fw-medium text-center">15+ Years</h5>
                            <p className="mb-0 text-center">of experience in business service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About