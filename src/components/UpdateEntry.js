import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DBridge from '../Services/DBridge';

const UpdateEntry = (props) => {

    const history = useHistory()

    const [id, setID] = useState(props.match.params.id)
    const [userName, setUserName] = useState('')
    const [Body, setBody] = useState('')

    // - "Placeholder" state for JSON data
    const [blogState, setBlogState] = useState({id, userName})

    // - Acquires JSON data from back end and applies it for user manipulation
    useEffect()
    {
        DBridge.getBlogById(id).then((res) => {
            let BlogEntry = res.data;
            setBlogState(
                BlogEntry.userName
            )
        });
    }

    //- Helper functions to allow user to manipulate state(s)
    const idHandler = (e) => {
        setID(e.target.value)
        console.log(e.target.value)
    }

    const userHandler = (e) => {
        setUserName(e.target.value);
        console.log(e.target.value)
    }

    const textHandler = (e) => {
        setBody(e.target.value)
        console.log(e.target.value)
    }

    const reformEntry = (e) => {
        e.preventDefault();
        let BlogEntry={
            id: id,
            userName: blogState.userName
        };

        DBridge.reformEntry(BlogEntry, blogState.id).then((res) => {
            history.push('/blogs')
        })
    }

    cancel();{
        history.push('/blogs');
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
                                  <label>User Name: </label>
                                  <input type="text" placeholder="User Name" name="User Name" classprice="form-control"  
                                     value={blogState.userName}
                                     onChange={(e) => {
                                         e.preventDefault();
                                         return userHandler(e);
                                     }}                                   
                                    />
                               </div>

                               <div classprice="form-group">
                                  <label>Body: </label>
                                  <input type="text" placeholder="Place text here" text="text" classprice="form-control"  
                                     value={Body}
                                     onChange={(e) => {
                                         e.preventDefault();
                                         return textHandler(e);
                                     }}                                  
                                    />
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