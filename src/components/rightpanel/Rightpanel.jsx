import React from 'react';
import {ThemeProvider} from '@primer/react'
import './rightpanel.css'
import Chevronright from '../rightpanel/Chevronright'
import Trash from '../rightpanel/Trash'
import Contrasting from '../rightpanel/Contrasting'
import Valuecontr from '../rightpanel/Valuecontr'
import Knob from '../rightpanel/Knob'
import Greyline from '../rightpanel/Greyline'
import Download from '../rightpanel/Download'
import Download1 from '../rightpanel/Download1'
import Download2 from './Download2';
// import Chevronright from './components/rightpanel/Chevronright';
// import Trash from './components/rightpanel/Trash';
// import Contrasting from './components/rightpanel/Contrasting';
// import Valuecontr from './components/rightpanel/Valuecontr';
// import Knob from './components/rightpanel/Knob';
// import Greyline from './components/rightpanel/Greyline';
// import Download from './components/rightpanel/Download';
// import Download2 from './components/rightpanel/Download1';




function Rightpanel() {
  return (
    
    <div className="right_panel">
      <div className='top_container'>
      <Chevronright/>
      <Trash/>
      </div>
      <div className='middle_container'>
      <Contrasting/>
      <Valuecontr/>
      </div>
      <div className='knob_container'>
      <Knob/>
      <Greyline/>
      </div>
      <div className='img_right'>
      <Download/>
      <Download1/>
      <Download2/>
      </div>
    
    </div>
    
  );
}

export default Rightpanel;