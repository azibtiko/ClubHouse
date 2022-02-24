import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function InfoCard() {
    let [input , setInput ] = useState()
    
  return ( <>
    <div className='infocardCover'>
        <Link to="/">
        <img src={require("../images/arrow.png")} alt="" />
        </Link>
            <h2>Enter your phone number</h2>
                <PhoneInput international defaultCountry='US' value = {input} onChange = {setInput}/>
            <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p> Ab ratione, reprehenderit repellendus </p>
            </div>
            <Link to="/Confirmation">
                <button href="#" className='nextBtn'>next</button>
            </Link>
    </div>
  </>
  )
}

export default InfoCard