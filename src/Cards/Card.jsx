import React from 'react'
import { BsAward } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Card() {
    return (
        <div className='container my-5'>
            <h2 style={{ color: "var(--black-color)" }} className='text-center'>Cards</h2>
            <div className="row my-5 gap-3">
                <div className="px-4 py-4 col-lg col-md d-flex flex-column align-items-start justify-content-center gap-3 rounded-3"style={{backgroundColor:"#fff3e2"}}>
                    <BsAward className='fs-1' style={{color:"rgb(237, 184, 110)"}}/>
                    <h4>Corporis voluptates</h4>
                    <p className='fw-light'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div className="px-4 py-4 col-lg col-md d-flex flex-column gap-3 align-items-start justify-content-center rounded-3" style={{backgroundColor:"#deedfd"}}>
                    <BsPatchCheck className='fs-1' style={{color:"rgb(32, 165, 248)"}}/>
                    <h4>Explicabo consectetur</h4>
                    <p className='fw-light'>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
                <div className="px-4 py-4 col-lg col-md d-flex flex-column align-items-start justify-content-center gap-3 rounded-3" style={{backgroundColor:"#d5f1e4"}}>
                    <FiSunrise className='fs-1' style={{color:"rgb(72, 200, 138)"}}/>
                    <h4>Ullamco laboris</h4>
                    <p className='fw-light'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div className="px-4 py-4 col-lg col-md d-flex flex-column align-items-start justify-content-center gap-3 rounded-3"style={{backgroundColor:"#fdeded"}}>
                    <IoShieldCheckmarkOutline className='fs-1' style={{color:"rgb(242, 132, 132)"}} />
                    <h4>Labore consequatur</h4>
                    <p className='fw-light'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
            </div>
        </div>
    )
}

export default Card