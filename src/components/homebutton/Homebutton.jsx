import React from 'react'
import '../homebutton/homebutton.css'
import {HomeIcon} from '@primer/octicons-react'

const Homebutton = () => {
  return (
    <div className='home_button flex items-center justify-center'>
      <HomeIcon size={16} className='fill-[#CAC4D0]' />
      </div>
  )
}

export default Homebutton