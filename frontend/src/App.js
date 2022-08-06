import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>

      <Header/>
      <div className='container'>
        
      </div> 

    </Router>
    </>
  );
}

export default App;
