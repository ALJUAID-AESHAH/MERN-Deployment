import React, { useEffect, useState } from 'react'
import { Router } from '@reach/router';
import Main from './views/Main';
import PetForm from './components/PetForm';
import Detail from './views/Detail';
import Update from './views/Update'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <PetForm path="/pets/new"/>
        <Detail path="/pets/:id" /> 
        <Update path='/pets/:id/edit'/> 
      </Router>
    </div>
  );
}
export default App;
