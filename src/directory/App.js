// This file is used for rendering everything the app needs and accesses. 

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import Home from './Home';
import Blogs from './Blogs';

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
      

      <Routes> 
        <Route path="/" element = {Home}/> 
        <Route path="/allBlogs" element={Blogs}/>

        <Route exact path="/addblog" component = {AddEntry}/> 
        <Route exact path="/updateBlogEntry/:id" component = {UpdateEntry}/> 
        <Route exact path="/deleteBlogEntry/:id" component = {DeleteEntry}/>
        <Route exact path="/viewBlogEntry/:id" component = {ViewEntry}/>

      </Routes>

      <Footer />
      
    </div >
  );
}

export default App
