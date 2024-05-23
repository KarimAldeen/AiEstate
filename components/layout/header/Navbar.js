import WhatsApp from '@/ui/WhatsApp'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div>
            <img src='/images/logo.svg' />
            <WhatsApp/>
        </div>
        <span>
        <div className='Off-Plan'>
        Off-Plan
        </div>
        <div className=''>
            Ready to move
            </div>

        </span>

    </div>
  )
}

export default Navbar