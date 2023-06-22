import React from 'react'
import {CloudIcon} from '@primer/octicons-react'

const Blur = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-[#000000] w-[73px] h-[73px] rounded m-2'>
       <CloudIcon size={25} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Размытие</p>
    </div>
  )
}

export default Blur