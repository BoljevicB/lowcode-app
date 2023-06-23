import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'


const Allother = () => {
  return (
    <div className='all_other_node'>
        <TrashIcon size={20} fill='#CAC4D0' />
        <div className='all_other_text'>
            <p>Прочее</p>
        <PencilIcon size={20} fill='#CAC4D0' />
        </div>
    </div>
  )
}

export default Allother