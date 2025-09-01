import React from 'react'
import mobile from "../assets/phone-app-screen.webp"
import { BsDisplay } from "react-icons/bs";
import { BsFeather } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { GoCodeSquare } from "react-icons/go";
import { LuSmartphone } from "react-icons/lu";
import { BsBrowserChrome } from "react-icons/bs";

function Mobile() {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5'style={{color:"var(--black-color)"}}>Mobile Vision</h1>
            <div class="row align-items-center justify-content-center">
                <div class="col-lg d-flex flex-column gap-4 my-4">
                    <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                        <div class="text-lg-end text-center">
                            <h5 style={{ color: "var(--black-color" }}>Use On Any Device</h5>
                            <p className='fw-light'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>
                        </div>
                        <div class="p-3 rounded-5 first"><BsDisplay className='fs-4 second' /></div>
                    </div>
                    <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                        <div class="text-lg-end text-center">
                            <h5 style={{ color: "var(--black-color" }}>Feather Icons</h5>
                            <p className='fw-light'>Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat</p>
                        </div>
                        <div class="p-3 rounded-5 first"><BsFeather className='fs-4 second' /></div>
                    </div>
                    <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                        <div class="text-lg-end text-center">
                            <h5 style={{ color: "var(--black-color" }}>Retina Ready</h5>
                            <p className='fw-light'>Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.</p>
                        </div>
                        <div class="p-3 rounded-5 first"><FiEye className='fs-4 second' /></div>
                    </div>
                </div>
                <div class="col-lg d-flex align-items-center justify-content-center">
                    <img src={mobile} alt="" style={{ width: "85%" }} />
                </div>
                <div class="col-lg">
                    <div class="col-md d-flex align-items-center justify-content-center flex-column gap-4 my-4">
                        <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                            <div class="p-3 rounded-5 first"><GoCodeSquare className='fs-4 second' /></div>
                            <div class="text-lg-start text-center">
                                <h5 style={{ color: "var(--black-color" }}>W3c Valid Code</h5>
                                <p className='fw-light'>Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                            <div class="p-3 rounded-5 first"><LuSmartphone className='fs-4 second' /></div>
                            <div class="text-lg-start text-center">
                                <h5 style={{ color: "var(--black-color" }}>Fully Responsive</h5>
                                <p className='fw-light'>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                            <div class="p-3 rounded-5 first"><BsBrowserChrome className='fs-4 second' /></div>
                            <div class="text-lg-start text-center">
                                <h5 style={{ color: "var(--black-color" }}>Browser Compatibility</h5>
                                <p className='fw-light'>Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile