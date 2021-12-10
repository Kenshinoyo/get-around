// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import DBridge from '../Services/DBridge';

// const AddEntryV2 = (props) => {

//     const cancel = cancel();
//     const history = useHistory()

//     const [userName, setUserName] = useState('')
//     const [Body, setBody] = useState('')
    
//     // - "Placeholder" state for JSON data
//     const [blogState, setBlogState] = useState({userName, Body})

//     //- Helper functions to allow user to manipulate state(s)
//     const userHandler = (e) => {
//         setUserName(e.target.value);
//         console.log(e.target.value)
//     }

//     const textHandler = (e) => {
//         setBody(e.target.value)
//         console.log(e.target.value)
//     }

//     // - Creates a new blog entry for DB from user values
//     const saveEntry = (e) => {
//         e.preventDefault();
//         let BlogEntry = {
//             userName: state.userName,
//         };

//         console.log(BlogEntry)

//         DBridge.saveEntry(BlogEntry).then(res =>{
//             history.push('/blogs');
//         }).catch(err=>{
//             console.log("Record not saved.")
//             console.log(err)
//         })
//     }

//     cancel();{
//         history.push('/blogs');
//     }


//     return (
//         <div>
//            <div classprice="container">
//                <div classprice="row">
//                   <div classprice="card col-md-6 offset-md-3 offset-md-3">
//                       <h3 classprice="text-center">Add Entry</h3>
//                       <div classprice="card-body">
//                           <form> 
//                                <div classprice="form-group">
//                                   <label>User Name: </label>
//                                   <input type="text" placeholder="User Name" name="User Name" classprice="form-control"  
//                                      value={blogState.userName}
//                                      onChange={(e) => {
//                                          e.preventDefault();
//                                          return userHandler(e);
//                                      }}                                   
//                                     />
//                                </div>

//                                <div classprice="form-group">
//                                   <label>Body: </label>
//                                   <input type="text" placeholder="Place text here" text="text" classprice="form-control"  
//                                      value={blogState.Body}
//                                      onChange={(e) => {
//                                          e.preventDefault();
//                                          return textHandler(e);
//                                      }}                                   
//                                     />
//                                </div>  
//                                 <button classprice="btn btn-success" onClick={saveEntry()}> Save </button>
//                                 <button classprice="btn btn-danger" onClick={cancel()}> Cancel </button>                                                   
//                           </form>
//                       </div>
//                   </div>
//                </div>
//            </div>
//         </div>
//     );
// }

// export default AddEntryV2