import React from 'react'
import {DownloadIcon} from '@primer/octicons-react'
import Imageexample from '../../imgs/image_example.png'

const Download1 = () => {
  return (
    <div className='download_image'>
        <img src={Imageexample} alt="Image" />
        <DownloadIcon className='download_icon1' size={18} fill='#CAC4D0' />
    
    </div>
  )
}

export default Download1