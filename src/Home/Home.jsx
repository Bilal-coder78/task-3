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

const boxes = [
  {
    id: 1,
    icon: <BsTrophy className='fs-4 second' />,
    des1: "3x Won Awards",
    des2: "Vestibulum ante ipsum"
  },
  {
    id: 2,
    icon: <BsBriefcase className='fs-4 second' />,
    des1: "6.5k Faucibus",
    des2: "Nullam quis ante"
  },
  {
    id: 3,
    icon: <BsGraphUp className='fs-4 second' />,
    des1: "80k Mauris",
    des2: "Etiam sit amet orci"
  },
  {
    id: 4,
    icon: <BsAward className='fs-4 second' />,
    des1: "6x Phasellus",
    des2: "Vestibulum ante ipsum"
  },
]

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
        <div className="row shadow rounded-5 mb-4 mt-4 g-sm-5 g-4 pb-5 p-4">
          {boxes.map((box) => {
            return (
              <div key={box.id} className="col-lg col-md-6 d-flex align-items-center justify-content-start gap-2">
                <div className="p-3 rounded-5 first"> {box.icon}</div>
                <div>
                  <h5 className='fw-medium'>{box.des1}</h5>
                  <p className='fw-light'>{box.des2}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home