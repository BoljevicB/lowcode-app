import React from 'react'
import './modulescreen.css'
import Homebutton from '../buttonsandsliders/Homebutton'
import Downloadbutton from '../buttonsandsliders/Downloadbutton'
import Upload from '../buttonsandsliders/Upload'
import Contrbutton from '../buttonsandsliders/Contrbutton'
import Contrastscale from '../buttonsandsliders/Contrastscale'
import Sliderdark from '../buttonsandsliders/Sliderdark'
import Connect from '../buttonsandsliders/Connect'
import Removeconnect from '../buttonsandsliders/Removeconnect'
import Playbutton from '../buttonsandsliders/Playbutton'
import Rightpanel from '../rightpanel/Rightpanel'

const Modulescreen = () => {
  return (
    <div className='modulescreen'>
      <Homebutton className='module_home_button'/>
      <p className='text-white'>Изменение изображения</p>
      <Playbutton className='module_play_button'/>
      <Downloadbutton className='module_download_button'/>
      <Upload className='module_upload_button'/>
      <Contrbutton className='module_contrast_button'/>
      <Contrastscale className='module_contrast_scale_button'/>
      <Sliderdark className='module_slider_dark'/>
      <Connect className='module_connect_button'/>
      <Removeconnect className='module_remove_connect_button'/>
      <Rightpanel className='module_right_button_panel'/>
    </div>
  )
}

export default Modulescreen