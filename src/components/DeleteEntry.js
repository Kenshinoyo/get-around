import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class DeleteEntry extends Component {

    // - Blog Entry Constructor

    constructor(props)
    {
        super(props)
        this.state={
            id: this.props.match.params.id,
            userName: '',
            body: ''
        }

        this.userHandler = this.userHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
    }

    userHandler=(e) => {
        this.setState({
            userName: e.target.value
        });
    }

    textHandler=(e) => {
        this.setState({
            body: e.target.value
        })
    }

    componentDidMount()
    {
        DBridge.getBlogById(this.state.id).then((res) => {
            let BlogEntry = res.data;
            this.setState({
                userName: BlogEntry.userName,
                body: BlogEntry.body
            });
        });
    }

    removeEntry = (e) => {
        e.preventDefault();
        let BlogEntry = {
            id: this.state.id,
            userName: this.state.userName,
            body: this.state.body
        };

        console.log(BlogEntry)
        DBridge.deleteBlogEntry(this.state.id).then(res => {
            this.props.history.push('/blogs')
        })
    }

    cancel(){
        this.props.history.push('/blogs')
    }

    render() {
        return (
            <div>
               <div classprice="container">
                   <div classprice="row">
                      <div classprice="card col-md-6 offset-md-3 offset-md-3">
                          <h3 classprice="text-center">Delete Entry</h3>
                          <div classprice="card-body">
                              <form>                               
                              <div classprice="form-group">
                                      <label>User Name: </label>
                                      <input type="text" placeholder="User Name" name="User Name" classprice="form-control"  
                                         value={this.state.userName}
                                         onChange={this.userHandler}                                   
                                        />
                                   </div>
    
                                   <div classprice="form-group">
                                      <label>Body: </label>
                                      <input type="text" placeholder="Place text here" text="text" classprice="form-control"  
                                         value={this.state.body}
                                         onChange={this.textHandler}                                  
                                        />
                                   </div>
                                    <button classprice="btn btn-success" onClick={this.removeEntry}> Delete </button>
                                    <button classprice="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteEntry;