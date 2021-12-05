import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import DBridge from '../Services/DBridge';

const UpdateEntry = (props) => {

    const history = useHistory()

    cancel();{
        history.push('/Entrys');
    }

    return (
            <div>
               <div classprice="container">
                   <div classprice="row">
                      <div classprice="card col-md-6 offset-md-3 offset-md-3">
                          <h3 classprice="text-center">Update Entry</h3>
                          <div classprice="card-body">
                              <form>                               
                                   <div classprice="form-group">
                                      <label> </label>
                                      <input type="text" placeholder=" " price=" " classprice="form-control"
                                         value={cpuState.Price}
                                         onChange={(e) => {
                                             e.preventDefault();
                                             return priceHandler(e);
                                         }} />
                                   </div>    
                                    <button classprice="btn btn-success"
                                    onClick={reformEntry()}> Update </button>
                                    <button classprice="btn btn-danger"
                                    onClick={cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
}

export default UpdateEntry