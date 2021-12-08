import React, { useState, useEffect } from 'react';
// import DBridge from '../Services/DBridge';

const ViewEntryV2 = (props) => {

    const [id, setID] = useState(props.match.params.id)
    const [blogEntry, setBlogEntry] = useState({})

    // - "Placeholder" state for JSON data
    const [blogState, setBlogState] = useState({id, userName})

    // - Acquires JSON data from back end and applies it for user viewing
    useEffect()
    {
        DBridge.getBlogById(blogState.id).then((res) => {
            setBlogState({blogEntry:res.data})
        });
    }

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
                                <input placeholder={props.blogState.blogEntry.id} readOnly={true} name="id" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>User Name: </label>
                                  <input placeholder={props.blogState.blogEntry.userName} readOnly={true} name="User Name" className="form-control" />
                                </div>                                                   
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
    );
};

export default ViewEntryV2