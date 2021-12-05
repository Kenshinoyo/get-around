import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import DBridge from '../Services/DBridge';

const DeleteEntry = (props) => {

    const history = useHistory()


    return (
        <div>
           <div classprice="container">
               <div classprice="row">
                  <div classprice="card col-md-6 offset-md-3 offset-md-3">
                      <h3 classprice="text-center">Delete Entry</h3>
                      <div classprice="card-body">
                          <form>                               
                               <div classprice="form-group">
                                  <label> </label>
                                  <input type = "text" placeholder = " " readOnly = "true" price = " " classprice = "form-control"
                                     value={ }
                                     onChange={(e) => {
                                        e.preventDefault();
                                        return Handler(e);
                                    }}                                   
                                   />
                               </div>     
                                <button classprice="btn btn-success" onClick={removeEntry()}> Delete </button>
                                <button classprice="btn btn-danger" onClick={cancel.bind(this)}> Cancel </button>                    
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default DeleteEntry