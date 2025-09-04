import React from 'react'
import mobile from "../assets/phone-app-screen.webp"
import { BsDisplay } from "react-icons/bs";
import { BsFeather } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { GoCodeSquare } from "react-icons/go";
import { LuSmartphone } from "react-icons/lu";
import { BsBrowserChrome } from "react-icons/bs";

const LeftFeatures = [
    {
        id: 1,
        title: "Use On Any Device",
        des: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.",
        icon: <BsDisplay className='fs-4 second' />
    },
    {
        id: 2,
        title: "Feather Icons",
        des: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.",
        icon: <BsFeather className='fs-4 second' />
    },
    {
        id: 3,
        title: "Retina Ready",
        des: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.",
        icon: <FiEye className='fs-4 second' />
    },
]

const RightFeatures = [
    {
        id: 4,
        title: "W3c Valid Code",
        des: "Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.",
        icon: <GoCodeSquare className='fs-4 second' />
    },
    {
        id: 5,
        title: "Fully Responsive",
        des: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.",
        icon: <LuSmartphone className='fs-4 second' />
    },
    {
        id: 6,
        title: "Browser Compatibility",
        des: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.",
        icon: <BsBrowserChrome className='fs-4 second' />
    },
]

function Mobile({
    Head = "Mobile Vision"
}) {
    return (
        <div className='container my-5'>
            <h1 className='text-center my-5' style={{ color: "var(--black-color)" }}>{Head}</h1>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg col-md d-flex flex-column gap-4 my-4">
                    {LeftFeatures.map((item) => {
                        return (
                            <div key={item.id} className="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                                <div className="text-lg-end text-center">
                                    <h5 style={{ color: "var(--black-color" }}>{item.title}</h5>
                                    <p className='fw-light'>{item.des}</p>
                                </div>
                                <div className="p-3 rounded-5 first">{item.icon}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-lg d-flex align-items-center justify-content-center">
                    <img src={mobile} alt="" style={{ width: "85%" }} />
                </div>
                <div className="col-lg col-md d-flex align-items-center justify-content-center flex-column gap-4 my-4">
                    {RightFeatures.map((item2) => {
                        return (
                            <div key={item2.id} className="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
                                <div className="p-3 rounded-5 first">{item2.icon}</div>
                                <div className="text-lg-start text-center">
                                    <h5 style={{ color: "var(--black-color" }}>{item2.title}</h5>
                                    <p className='fw-light'>{item2.des}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mobile