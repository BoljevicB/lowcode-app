import React from 'react';
import {ThemeProvider} from '@primer/react'

import Blur from './components/Blur';
import Contrast from './components/Contrast';
import Colorbalance from './components/Colorbalance';
import Nodsbutton from './components/Nodsbutton';
import Homebutton from './components/homebutton/Homebutton';
import Chevronright from './components/rightpanel/Chevronright';
import Trash from './components/rightpanel/Trash';
import Contrasting from './components/rightpanel/Contrasting';
import Valuecontr from './components/rightpanel/Valuecontr';



function App() {
  return (
    <ThemeProvider>
    <div className="App m-2">
      <Chevronright/>
      <Trash/>
      <Contrasting/>
      <Valuecontr/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
