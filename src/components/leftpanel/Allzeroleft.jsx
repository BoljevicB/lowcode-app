import React from 'react'
import {RiCreativeCommonsZeroFill} from 'react-icons/ri'

const Allzeroleft = () => {
  return (

    <button className='flex justify-center items-center flex-col bg-[#272727] w-[73px] h-[73px] rounded m-2'>
       <RiCreativeCommonsZeroFill fill='#CAC4D0' size={25}/>
       <p className='text-[#CAC4D0] text-xs' >Всё на 100</p>
    </button>
    
  )
}

export default Allzeroleft