import React from 'react'
import "./Card.css"
import { BsAward } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { FiSunrise } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Card() {
  return (
    <div className='container my-5'>
        <h2 style={{color:"var(--black-color)"}}className='text-center'>Cards</h2>
        <div class="row my-5">
            <div class="box orange col-lg-3 d-flex flex-column gap-3">
                <BsAward />
                <h4>Corporis voluptates</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div class="box blue col-lg-3 d-flex flex-column gap-3">
                <BsPatchCheck />
                <h4>Explicabo consectetur</h4>
                <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
            </div>
            <div class="box green col-lg-3 d-flex flex-column gap-3">
                <FiSunrise />
                <h4>Ullamco laboris</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div class="box danger col-lg-3 d-flex flex-column gap-3">
                <IoShieldCheckmarkOutline />
                <h4>Labore consequatur</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
        </div>
    </div>
  )
}

export default Card