import React from 'react'
import "./Home.css"
import image from "../assets/illustration-1.webp"
import { CiSettings } from "react-icons/ci"
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsTrophy } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { Link } from 'react-scroll';

function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#f6f9ff" }}>
        <div id='home' className='container w-100'>
          <div className="row">
            <div className="left-home col-12 col-lg-6 d-flex align-items-center justify-content-center d-lg-block flex-column gap-4">
              <p className='text-primary p-2 px-2 fw-medium w-auto rounded-5 mb-lg-4 mt-lg-4' style={{ backgroundColor: "#e5f1fe", display: "inline-flex" }}><CiSettings className='fs-3 fw-bold' />Working for your success</p>
              <h1 className='fs-1 fw-semibold lh-base mb-lg-4' style={{ color: "#374151" }}>
                Maecenas Vitae<br />
                Consectetur Led<br />
                <em style={{ color: "#007BFF" }}> Vestibulum Ante</em>
              </h1>
              <p className='mb-lg-4'>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
              <div className="d-flex align-items-center justify-content-start gap-3 mt-lg-2">
                <Link to='about'><button className='w-auto btn btn-primary rounded-5'>Get Started</button></Link>
                <div className="d-flex gap-1 pt-3"><FaRegCirclePlay className='fs-4 fw-medium' /><p className=''>Play Video</p></div>
              </div>
            </div>
            <div className="right-home col-12 col-lg-6 mb-5 mt-5">
              <img src={image} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="container w-100">
        <div className="row shadow-lg rounded-5 mb-4 mt-4 g-5 pb-5 p-4">
          <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-start gap-2">
            <div className="p-3 rounded-5 first"> <BsTrophy className='fs-4 second' /></div>
            <div>
              <h5 className='fw-medium'>3x Won Awards</h5>
              <p className='fw-light'>Vestibulum ante ipsum</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-start gap-2">
            <div className="p-3 rounded-5 first"><BsBriefcase className='fs-4 second' /></div>
            <div>
              <h5 className='fw-medium'>6.5k Faucibus</h5>
              <p className='fw-light'>Nullam quis ante</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-start gap-2">
            <div className="p-3 rounded-5 first"> <BsGraphUp className='fs-4 second' /></div>
            <div>
              <h5 className='fw-medium'>80k Mauris</h5>
              <p className='fw-light'>Etiam sit amet orci</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-start gap-2">
            <div className="p-3 rounded-5 first">  <BsAward className='fs-4 second' /></div>
            <div>
              <h5 className='fw-medium'>6x Phasellus</h5>
              <p className='fw-light'>Vestibulum ante ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home