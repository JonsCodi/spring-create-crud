import React, {Component} from 'react';
import axios from 'axios';

class AddBook extends Component{

  addBook(book){
    axios.request({
      method: 'POST',
      url: 'http://localhost:8080/book/add',
      data:book
    }).then(res=>{
        this.props.history.push('/')
    }).catch(err=>console.log(err));
  }

  onAddSubmit(e){
    e.preventDefault();
    const book = {
      name : this.refs.Name.value,
      writer : this.refs.Writer.value,
      desc : this.refs.Desc.value
    }
    this.addBook(book);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onAddSubmit.bind(this)}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="name" placeholder="Name" ref="Name" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Writer</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="writer" placeholder="Writer" ref="Writer" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="desc" placeholder="Description" ref="Desc" />
            </div>
          </div>
          <input type="submit" value="Save" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default AddBook;
