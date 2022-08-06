import React from 'react';
import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Stagiaires } from './pages/Stagiaires';

function App() {
  return (
    <>
    <BrowserRouter>

      <Header/>
      
      <Routes>
          <Route path='/stagiaires' element={<Stagiaires />} />
      </Routes>
      

    </BrowserRouter>
    </>
  );
}

export default App;
