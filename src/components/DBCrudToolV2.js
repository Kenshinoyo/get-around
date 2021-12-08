import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import DBridge from "../Services/DBridge";

const DBCrudToolV2 = (props) => {

    const cancel = cancel();
    const history = useHistory();

    const [userName, setUserName] = useState('')
    const [blogs, setBlogs] = useState([])

    const [blogState, setBlogState] = useState(setBlogs)

    // - Acquires JSON data from back end and applies it for user manipulation
    useEffect()
    {
        DBridge.getBlogs().then((res) => {
            setBlogState({blogs:res.data})
        });
    }

    addBlog()
    {
        props.history.push('/add-blog');
    }

    editBlog(id)
    {
        props.history.push(`/update-blog/${id}`)
    }

    deleteBlog(id)
    {
        props.history.push(`/update-blog/${id}`)
    }

    viewBlog(id)
    {
        props.history.push(`/view-blog/${id}`)
    }

    return (
        <div>
                <h2 className="text-center">Blog List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addblogEntry}> Add blogEntry</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id#</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(
                                     blogEntry =>
                                     <tr key={blogEntry.id}>
                                         <td>{blogEntry.id}</td>
                                         <td>{blogEntry.userName}</td>
                                         <td>
                                            <button onClick={() => editBlog(blogEntry.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() => deleteBlog(blogEntry.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() => viewBlog(blogEntry.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
    );
};

export default DBCrudToolV2;