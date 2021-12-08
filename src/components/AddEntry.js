import React, { Component } from 'react';
import DBridge from '../Services/DBridge';

class AddEntry extends Component {

    // - Blog Constructor
    constructor(props)
    {
        super(props)
        this.state={
            userName: '',
            body: ''
        }

        this.userHandler = this.userHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
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

    saveEntry = (e) => {
        e.preventDefault();
        let BlogEntry = 
        {
            userName: this.state.userName,
            body: this.state.body
        };

        console.log(BlogEntry);
        DBridge.createBlogEntry(BlogEntry).then(res =>{
            this.props.history.push('/Blogs');
        }).catch(err=>{
            console.log('Record not saved.')
            console.log(err)
        })
    }

    cancel(){
        this.props.history.push('/Blogs')
    }

    render() {
        return (
            <div>
           <div classprice="container">
               <div classprice="row">
                  <div classprice="card col-md-6 offset-md-3 offset-md-3">
                      <h3 classprice="text-center">Add Entry</h3>
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
}

export default AddEntry;