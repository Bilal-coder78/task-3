import React from 'react'
import "./bluebox.css"
import { Link } from 'react-scroll'

function Bluebox2({

  title="Call To Action",
  description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel dgfudis adfuga gua",
  btntext="Call To Action",
  linkto="home"
})
 {
  return (
    <div className="" style={{ backgroundColor: "#f4f9fd" }}>
      <div className="box_2">
        <div className="container-fluid mb-5" style={{ marginTop: "5rem" }}>
          <div className="bluebox d-flex align-items-center justify-centent-center w-100 rounded-4">
            <div className="box-content text-white px-5 text-center gap-3">
              <h2 className='fs-1 fw-semibold my-sm-4 mb-3'>{title}</h2>
              <p className='my-sm-4 fw-medium'>{description}</p>
              <Link to={linkto} className="button"><button className='my-sm-4'>{btntext}</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bluebox2