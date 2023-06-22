import React from 'react'
import {SunIcon} from '@primer/octicons-react'

const Contrast = () => {
  return (

    <div className='flex justify-center items-center flex-col bg-[#000000] w-[73px] h-[73px] rounded m-2'>
       <SunIcon size={25} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Яркость</p>
    </div>
    
  )
}

export default Contrast