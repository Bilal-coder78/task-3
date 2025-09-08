import React from 'react'
import { FiActivity } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsEasel } from "react-icons/bs";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const services = [
    {
        id: 1,
        icon: <FiActivity className='fs-4 second' />,
        title: "Nesciunt Mete",
        description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore.",
        btn:"Read More"
    },
    {
        id: 2,
        icon: <BsFillDiagram3Fill className='fs-4 second' />,
        title: "Eosle Commodi",
        description: "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
        btn:"Read More"
    },
    {
        id: 3,
        icon: <BsEasel className='fs-4 second' />,
        title: "Ledo Markt",
        description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
        btn:"Read More"
    },
    {
        id: 4,
        icon: <BsClipboardData className='fs-4 second' />,
        title: "Asperiores Commodit",
        description: "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident.",
        btn:"Read More"
    }
]
function Service({
    Heading="Services",
    Hdescription="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
}) {
    return (
        <>
            <div className='container pt-2' id='service'>
                <h1 className='text-center mt-5' style={{ color: "var(--black-color)" }}>{Heading}</h1>
                <p className='text-center mt-3 mb-5'>{Hdescription}</p>
                <div className="row gap-4 mb-4 align-items-center justify-content-center">
                    {services.map((service)=>{
                        return(
                    <div key={service.id} className="col-lg-5 bg-white d-flex align-items-start shadow rounded-3 p-4 gap-3">
                        <div className="p-3 rounded-5 first">{service.icon}</div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>{service.title}</h3>
                            <p className='fw-light'>{service.description}</p>
                            <div className='text-primary mx-2 pointer'>{service.btn}  <FaArrowRightLong /></div>
                        </div>
                    </div>
                        )
                     })}
                    {/* <div className="col-lg d-flex bg-white align-items-start justify-content-center shadow rounded-3 p-4 gap-3" style={{ height: "100%" }}>
                        <div className="p-3 rounded-5 first"><BsFillDiagram3Fill className='fs-4 second' /></div>
                        <div className='d-flex flex-column gap-2'>
                            <h3 style={{ color: "var(--black-color)" }}>Eosle Commodi</h3>
                            <p className='fw-light'>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                            <div className='text-primary mx-2 pointer'>Read More   <FaArrowRightLong /></div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row mb-4 gap-3 align-items-center justify-content-center">
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
                </div> */}
            </div>
            <div className="container mb-5" style={{ marginTop: "5rem" }}>
                <div className="row">
                    <div className="col-lg text-center text-lg-start mb-4">
                        <h2 className='fw-semibold' style={{ color: "var(--black-color)" }}>Have a question? Check out the FAQ</h2>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                        <BiSupport className='fs-1 fw-bold text-primary mt-5 d-none d-lg-block' style={{ height: "100px", width: "100px" }} />
                    </div>
                    <div className="col-lg">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-2">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service