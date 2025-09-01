import React from 'react'
import { FiActivity } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsEasel } from "react-icons/bs";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";

function Service() {
    return (
        <div style={{backgroundColor:"#f4f9fd"}}>
        <div className='container'>
            <h1 className='text-center mt-5' style={{ color: "var(--black-color)" }}>Services</h1>
            <p className='text-center mt-3 mb-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div class="row gap-3 mb-4 align-items-center justify-content-center">
                <div class="col-lg bg-white d-flex align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{height:"100%"}}>
                    <div class="p-3 rounded-5 first"><FiActivity className='fs-4 second' /></div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 style={{ color: "var(--black-color)" }}>Nesciunt Mete</h3>
                        <p className='fw-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                        <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                    </div>
                </div>
                <div class="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{height:"100%"}}>
                    <div class="p-3 rounded-5 first"><BsFillDiagram3Fill className='fs-4 second' /></div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 style={{ color: "var(--black-color)" }}>Eosle Commodi</h3>
                        <p className='fw-light'>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                    </div>
                </div>
                </div>
                <div class="row mb-4 gap-3 align-items-center justify-content-center">
                <div class="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{height:"100%"}}>
                    <div class="p-3 rounded-5 first"><BsEasel className='fs-4 second' /></div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 style={{ color: "var(--black-color)" }}>Ledo Markt</h3>
                        <p className='fw-light'>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                    </div>
                </div>
                <div class="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{height:"100%"}}>
                    <div class="p-3 rounded-5 first"><BsClipboardData className='fs-4 second' /></div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 style={{ color: "var(--black-color)" }}>Asperiores Commodit</h3>
                        <p className='fw-light'>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                        <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                    </div>
                </div>
                </div>
        </div>
        </div>
    )
}

export default Service