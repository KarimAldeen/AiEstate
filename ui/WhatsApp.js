import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const WhatsApp = ({label = "WhatsApp AI"}) => {
  return (
    <button className='WhatsApp'> <IoLogoWhatsapp />  {label}  </button>

  )
}

export default WhatsApp