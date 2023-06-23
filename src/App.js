import React from 'react';
import {ThemeProvider} from '@primer/react'
import './App.css'
import Rightpanel from './components/rightpanel/Rightpanel';





function App() {
  return (
    <ThemeProvider>
    <div className="App">

      <Rightpanel/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;
