import React from 'react';
import './leftpanel.css'


import Greyline from '../rightpanel/Greyline'
import Nodsbutton from '../leftpanel/Nodsbutton';
import Pursenode from '../leftpanel/Pursenode';
import Contrast from '../leftpanel/Contrast';
import Blur from '../leftpanel/Blur';
import Colorbalance from '../leftpanel/Colorbalance';


function Leftpanel() {
  return (
    
    <div className="left_panel">
      
      <div className='top_container'>
      <Nodsbutton/>
      <Pursenode/>
      </div>
      
      <div className='line_container'>
      <Greyline/>
      </div>
      
      <div className='bottom_container'>
      <Contrast/>
      <Blur/>
      <Colorbalance/>
      <Contrast/>
      </div>
      
    </div>
    
  );
}

export default Leftpanel

