import React from 'react'
import "./client.css"
import client1 from "../assets/clients/client-1.png"
import client2 from "../assets/clients/client-2.png"
import client3 from "../assets/clients/client-3.png"
import client4 from "../assets/clients/client-4.png"
import client5 from "../assets/clients/client-5.png"
import client6 from "../assets/clients/client-6.png"
import { GoDotFill } from "react-icons/go";

function Client() {
  return (
    <div className='container mb-5' style={{ marginTop: "5rem" }}>
      <div className="row gap-4">
        <div className="col-12 clients flex-wrap d-flex align-items-center justify-content-center gap-sm-5 gap-3">
          <img src={client1} alt="" className='client' />
          <img src={client2} alt="" className='client' />
          <img src={client3} alt="" className='client d-none d-sm-block' />
          <img src={client4} alt="" className='client d-none d-sm-block' />
          <img src={client5} alt="" className='client d-none d-sm-block' />
          <img src={client6} alt="" className='client d-none d-sm-block' />
        </div>
        <div className="col-12 dots d-flex align-items-center justify-content-center gap-1">
          <GoDotFill className='fw-bold fs-4 pointer' />
          <GoDotFill className='fw-bold fs-4 pointer' />
          <GoDotFill className='fw-bold fs-4 pointer' />
          <GoDotFill className='fw-bold fs-4 pointer' />
          <GoDotFill className='fw-bold fs-4 pointer' />
        </div>
      </div>
    </div>
  )
}

export default Client