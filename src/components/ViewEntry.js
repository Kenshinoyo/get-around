import React, { useState, useEffect } from 'react';
// import DBridge from '../Services/DBridge';

const ViewEntry = (props) => {


    return (
        <div>
           <div className="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">View Entry Details</h3>
                      <div className="card-body">
                          <form>  
                              <div className="form-group">
                                <label>ID#: </label>
                                <input placeholder={props.state.Entry.id} readOnly={true} name="id" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label> </label>
                                  <input type="text" placeholder={ } readOnly={true} name=" " className="form-control" />                                                     
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default ViewEntry