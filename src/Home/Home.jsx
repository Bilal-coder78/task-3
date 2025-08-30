import React from 'react'
import "./Home.css"
import { CiSettings } from "react-icons/ci";

function Home() {
  return (
    <div id='home'className='container w-100'>
        <div class="row">
        <div class="left-home col-6">
            <p className='text-primary p-2 fw-medium first rounded-5 p-2'><CiSettings className='fs-3 fw-bold'/>Working for your success</p>
            <h2>Maecenas VitaeConsectetur Led
                <em> Vestibulum Ante</em>
            </h2>
            <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
            <button>Get Started</button>
            <p>Play Video</p>
        </div>
        <div class="right-home col-6"></div>
        </div>
    </div>
  )
}

export default Home