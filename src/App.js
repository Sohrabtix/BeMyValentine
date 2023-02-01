import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Valentine from './Valentine.js'
import Yes from './Yes.js'
import No from './No.js'
import Maybe from './Maybe.js'
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Valentine/>}/>
        <Route path='Yes' element={<Yes/>}/>
        <Route path='No' element={<No/>}/>
        <Route path='Maybe' element={<No/>}/>
      </Routes>
    </div>
  );
}

export default App;
