import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'


const Forvknode = () => {
  return (
    <div className='for_vk_node'>
        <TrashIcon size={20} fill='#CAC4D0' />
        <div className='for_vk_text'>
            <p>Для ВК</p>
        <PencilIcon size={20} fill='#CAC4D0' />
        </div>
    </div>
  )
}

export default Forvknode