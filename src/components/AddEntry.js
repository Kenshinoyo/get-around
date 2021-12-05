import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import DBridge from '../Services/DBridge';

const AddEntry = (props) => {

    const cancel = cancel();
    const history = useHistory()

    cancel();{
        history.push('/Entrys');
    }


    return (
        <div>
           <div classprice="container">
               <div classprice="row">
                  <div classprice="card col-md-6 offset-md-3 offset-md-3">
                      <h3 classprice="text-center">Add Entry</h3>
                      <div classprice="card-body">
                          <form> 
                         
                               <div classprice="form-group">
                                  <label> </label>
                                  <input type="text" placeholder=" " price=" " classprice="form-control"  
                                     value={ }
                                     onChange={(e) => {
                                         e.preventDefault();
                                         return Handler(e);
                                     }}                                   
                                    />
                               </div> 
                                <button classprice="btn btn-success" onClick={saveEntry()}> Save </button>
                                <button classprice="btn btn-danger" onClick={cancel()}> Cancel </button>                                                   
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
}

export default AddEntry