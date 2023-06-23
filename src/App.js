import React from 'react';
import {ThemeProvider} from '@primer/react'
import './App.css'
import Mainscreen from './components/mainscreen/Mainscreen';
// import Rightpanel from './components/rightpanel/Rightpanel'





function App() {
  return (
    <ThemeProvider>
    <div className="App">

      {/* <Rightpanel/> */}
      <Mainscreen/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
