import React from 'react';
import {ThemeProvider} from '@primer/react'
import './App.css'
import Mainscreen from './components/mainscreen/Mainscreen';
import Downloadbutton from './components/buttonsandsliders/Downloadbutton';
import Sliderdark from './components/buttonsandsliders/Sliderdark';
import Playbutton from './components/buttonsandsliders/Playbutton';
import Rightpanel from './components/rightpanel/Rightpanel'
import Homebutton from './components/buttonsandsliders/Homebutton';
import Blur from './components/leftpanel/Blur';
import Colorbalance from './components/leftpanel/Colorbalance';
import Contrast from './components/leftpanel/Contrast';
import Nodsbutton from './components/leftpanel/Nodsbutton';
import Pursenode from './components/leftpanel/Pursenode';
import Upload from './components/buttonsandsliders/Upload';
import Contrbutton from './components/buttonsandsliders/Contrbutton';
import Contrastscale from './components/buttonsandsliders/Contrastscale';
import Connect from './components/buttonsandsliders/Connect';
import Removeconnect from './components/buttonsandsliders/Removeconnect';
import Trashbutton from './components/buttonsandsliders/Trashbutton';
import Insertnode from './components/buttonsandsliders/Insertnode';
import Schemesleft from './components/leftpanel/Schemesleft';
import Listbullet from './components/leftpanel/Listbullet';
import Allhundredleft from './components/leftpanel/Allhundredleft';
import Allzeroleft from './components/leftpanel/Allzeroleft';
import Importleft from './components/leftpanel/Importleft';

// import Modulescreen from './components/modulescreen/Modulescreen';




function App() {
  return (
    <ThemeProvider>
    <div className="App">

      <Rightpanel/> 
      <Mainscreen/> 
      <Downloadbutton/>
      <Homebutton/>
      <Playbutton/>
      <Sliderdark/>
      <Blur/>
      <Colorbalance/>
      <Contrast/>
      <Nodsbutton/>
      <Pursenode/>
      <Upload/>
      <Contrbutton/>
      <Contrastscale/>
      <Connect/>
      <Removeconnect/>
      <Trashbutton/>
      <Insertnode/>
      <Schemesleft/>
      <Listbullet/>
      <Importleft/>
      <Allhundredleft/>
      <Allzeroleft/>
      

  
    
    </div>
    </ThemeProvider>
  );
}

export default App;
