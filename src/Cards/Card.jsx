import React from 'react'
import { BsAward } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Cards = [
    {
        id: 1,
        icon: <BsAward className='fs-1' style={{ color: "rgb(237, 184, 110)" }} />,
        title: "Corporis voluptates",
        description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
        bgcolor: "#fff3e2",
    },
    {
        id: 2,
        icon: <BsPatchCheck className='fs-1' style={{ color: "rgb(32, 165, 248)" }} />,
        title: "Explicabo consectetur",
        description: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
        bgcolor: "#deedfd"
    },
    {
        id: 3,
        icon: <FiSunrise className='fs-1' style={{ color: "rgb(72, 200, 138)" }} />,
        title: "Ullamco laboris",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        bgcolor: "#d5f1e4",
    },
    {
        id: 4,
        icon: <IoShieldCheckmarkOutline className='fs-1' style={{ color: "rgb(242, 132, 132)" }} />,
        title: "Labore consequatur",
        description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
        bgcolor: "#fdeded",
    },
]

function Card({
    Head = "Cards"
}) {
    return (
        <div className='container my-5'>
            <h2 style={{ color: "var(--black-color)" }} className='text-center'>{Head}</h2>
            <div className="row my-5 gap-3">
                {Cards.map((card) => {
                    return (
                        <div key={card.id} className="px-4 py-4 col-lg col-md d-flex flex-column align-items-start justify-content-center gap-3 rounded-3" style={{ backgroundColor: card.bgcolor }}>
                            {card.icon}
                            <h4>{card.title}</h4>
                            <p className='fw-light'>{card.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card