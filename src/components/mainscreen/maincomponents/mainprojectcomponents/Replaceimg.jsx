import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'


const Replaceimg = () => {
  return (
    <div className='replace_img_node'>
        <TrashIcon size={20} fill='#CAC4D0' />
        <div className='replace_img_text'>
            <p>Изменение изображ...</p>
        <PencilIcon size={20} fill='#CAC4D0' className='replace_icon' />
        </div>
    </div>
  )
}

export default Replaceimg