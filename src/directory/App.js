// This file is used for rendering everything the app needs and accesses. 

import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Home from './Home';

import AddEntry from '../components/AddEntry';
import UpdateEntry from '../components/UpdateEntry';
import DeleteEntry from '../components/DeleteEntry';
import ViewEntry from '../components/ViewEntry';

  

import '../App.css';

const App = () => {
  
  return (
    <div id="app" > 
    
     {/* <SearchBar /> */}
     <NavBar />
      

      <Switch> 
        <Route exact path="/"> 
          <Home />
        </Route>
        
        <Route exact path="/allBlogs"> 
          <Blogs />
        </Route>

        <Route exact path="/results"> 
          <Results />
        </Route>

        <Route exact path="/addblog" component = {AddEntry}/> 
        <Route exact path="/updateBlogEntry/:id" component = {UpdateEntry}/> 
        <Route exact path="/deleteBlogEntry/:id" component = {DeleteEntry}/>
        <Route exact path="/viewBlogEntry/:id" component = {ViewEntry}/>

      </Switch>

      <Footer />
      
    </div >
  );
}

export default App;
