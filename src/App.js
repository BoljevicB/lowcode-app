import React from 'react';
import {ThemeProvider} from '@primer/react'
import './App.css'
import Mainscreen from './components/mainscreen/Mainscreen';
import Downloadbutton from './components/buttonsandsliders/Downloadbutton';
import Sliderdark from './components/buttonsandsliders/Sliderdark';
import Playbutton from './components/buttonsandsliders/Playbutton';
import Rightpanel from './components/rightpanel/Rightpanel'
import Homebutton from './components/buttonsandsliders/Homebutton';


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
      
  
    
    </div>
    </ThemeProvider>
  );
}

export default App;
