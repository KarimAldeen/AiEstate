import React from 'react'
import Dropdown from './DropDown'

const ContactUs = () => {
  return (
    <div className='contactUs'>
        <h1>About us</h1>
        <p>
        With over 10,000 employees, maids.cc is the #1 visa issuer and the 7th largest employer in the UAE; maids.cc is also the only maid company listed among the 
        <span>
       {"  "} top government-endorsed companies.
        </span>

        </p>
        <Dropdown/>
    </div>
  )
}

export default ContactUs