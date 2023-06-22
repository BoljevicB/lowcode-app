import React from 'react';
import {ThemeProvider} from '@primer/react'
import Blur from './components/Blur';
import Contrast from './components/Contrast';
import Colorbalance from './components/Colorbalance';
import Nodsbutton from './components/Nodsbutton';


function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Nodsbutton/>
      <Contrast/>
      <Blur/>
      <Colorbalance/>
    </div>
    </ThemeProvider>
  );
}

export default App;
