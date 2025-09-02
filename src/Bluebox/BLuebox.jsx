import React from 'react'
import "./bluebox.css"
import { Link } from 'react-scroll'

function BLuebox({
   title = "Maecenas tempus tellus eget condimentum",
  description = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel dgfudis adfuga gua",
  buttonText = "Call To Action",
  linkTo = "home",
}) {
  return (
    <div className="container mb-5"style={{marginTop:"6rem"}}>
        <div className="bluebox d-flex align-items-center justify-centent-center w-100 rounded-4">
            <div className="box-content text-white px-5 text-center">
                <h4 className='fs-1 fw-light my-sm-4 mb-3'>{title}</h4>
                <p className='my-sm-4 fw-light'>{description}</p>
                <Link to={linkTo} className="button"><button className='my-sm-4'>{buttonText}</button></Link>
            </div>
        </div>
    </div>
  )
}

export default BLuebox