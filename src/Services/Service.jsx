import React from 'react'
import { FiActivity } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsEasel } from "react-icons/bs";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

function Service() {
    return (
        <div style={{ backgroundColor: "#f4f9fd" }}>
            <div className='container' id='service'>
                <h1 className='text-center mt-5' style={{ color: "var(--black-color)" }}>Services</h1>
                <p className='text-center mt-3 mb-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                <div className="row gap-3 mb-4 align-items-center justify-content-center">
                    <div className="col-lg bg-white d-flex align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{ height: "100%" }}>
                        <div className="p-3 rounded-5 first"><FiActivity className='fs-4 second' /></div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>Nesciunt Mete</h3>
                            <p className='fw-light'>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                            <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                        </div>
                    </div>
                    <div className="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{ height: "100%" }}>
                        <div className="p-3 rounded-5 first"><BsFillDiagram3Fill className='fs-4 second' /></div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>Eosle Commodi</h3>
                            <p className='fw-light'>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                            <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4 gap-3 align-items-center justify-content-center">
                    <div className="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{ height: "100%" }}>
                        <div className="p-3 rounded-5 first"><BsEasel className='fs-4 second' /></div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>Ledo Markt</h3>
                            <p className='fw-light'>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                            <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                        </div>
                    </div>
                    <div className="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{ height: "100%" }}>
                        <div className="p-3 rounded-5 first"><BsClipboardData className='fs-4 second' /></div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>Asperiores Commodit</h3>
                            <p className='fw-light'>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                            <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mb-5" style={{ marginTop: "5rem" }}>
                <div class="row">
                    <div class="col-lg text-center text-lg-start mb-4">
                        <h2 className='fw-semibold'style={{color:"var(--black-color)"}}>Have a question? Check out the FAQ</h2>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                        <BiSupport className='fs-1 fw-bold text-primary mt-5 d-none d-lg-block'style={{height:"100px",width:"100px"}}/>
                    </div>
                    <div class="col-lg">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-2">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service