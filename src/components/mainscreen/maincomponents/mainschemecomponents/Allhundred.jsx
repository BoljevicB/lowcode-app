import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'


const Allhundred= () => {
  return (
    <div className='all_hundred_node'>
        <TrashIcon size={20} fill='#CAC4D0' />
        <div className='all_hundred_text'>
            <p>Все на 100</p>
        <PencilIcon size={20} fill='#CAC4D0' />
        </div>
    </div>
  )
}

export default Allhundred