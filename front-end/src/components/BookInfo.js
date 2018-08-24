import React, {Component} from 'react';
import axios from 'axios';

class BookInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      info : ''
    }
  }

  componentWillMount(){
    this.getinf();
  }

  getinf(){
    let id = this.props.match.params.id;
    axios.get('http://localhost:8080/book/'+id)
    .then(response =>{
      this.setState({info : response.data}, () =>{
        console.log(response.data);
      });
    })
  }

  update(book){
    axios.request({
      method: 'PUT',
      url: 'http://localhost:8080/updateBook',
      data: book
    }).then(res=>{
        this.props.history.push('/')
        window.location.reload();
    }).catch(err=>console.log(err));
  }

  onUpdateSubmit(e){
    e.preventDefault();
    const book = {
      id : this.state.info.id,
      name : this.refs.Name.value,
      writer : this.refs.Writer.value,
      desc : this.refs.Desc.value
    }
    this.update(book);
  }

  render(){
    return(
      <div>
        <h1>INFO</h1>
        <h2>{this.state.info.wirter}</h2>
        <h3>{this.state.info.name}</h3>
        <h4>{this.state.info.desc}</h4>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">update</button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onUpdateSubmit.bind(this)}>
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
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default BookInfo;
