import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'


const Allzero= () => {
  return (
    <div className='all_zero_node'>
        <TrashIcon size={20} fill='#CAC4D0' />
        <div className='all_zero_text'>
            <p>Все на 0</p>
        <PencilIcon size={20} fill='#CAC4D0' />
        </div>
    </div>
  )
}

export default Allzero