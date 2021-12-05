// This file is used for rendering everything the app needs and accesses. 

import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Home from './Home';
  

import '../App.css';

const App = () => {

  return (
    <div id="app" > 
     <NavBar />
      

      <Switch> 
        
        <Route exact path="/"> 
          <Home />
        </Route>

      </Switch>

      <Footer />
      
    </div >
  );
}

export default App;
