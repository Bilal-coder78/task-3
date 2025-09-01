import React from 'react'
import "./bluebox.css"

function BLuebox() {
  return (
    <div class="container-fluid container-sm mb-5"style={{marginTop:"6rem"}}>
        <div class="bluebox d-flex align-items-center justify-centent-center w-100 rounded-4">
            <div class="box-content text-white px-5 text-center">
                <h4 className='fs-1 fw-medium my-sm-4 mb-3'>Maecenas tempus tellus eget condimentum</h4>
                <p className='my-sm-4'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel dgfudis adfuga gua</p>
                <div class="button"><button className='my-sm-4'>Call To Action</button></div>
            </div>
        </div>
    </div>
  )
}

export default BLuebox