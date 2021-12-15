import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class ViewEntry extends Component {

    // - Abdridged Blog Constructor
    constructor(props)
    {
        super(props)

        this.state={
            id: this.props.match.params.id,
            blogEntry:{}
        }
    }

    componentDidMount()
    {
        DBridge.getBlogById(this.state.id).then((res) => {
            this.setState({blogEntry:res.data})
        })
    }

    render() {
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
                                <input placeholder={this.state.blogEntry.id} readOnly={true} name="id" className="form-control" />
                               </div>   
                               <div className="form-group">
                                  <label>User Name: </label>
                                  <input placeholder={this.state.blogEntry.userName} readOnly={true} name="User Name" className="form-control" />
                                </div>                                                   
                          </form>
                      </div>
                  </div>
               </div>
           </div>
        </div>
        );
    }
}

export default ViewEntry;