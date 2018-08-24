import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class BookItem extends Component{
	constructor(props){
		super(props);
		this.state = {
				item : props.item
		}
	}

	onDelete(){
		let id = this.state.item.id;
		axios.delete('http://localhost:8080/book/'+id).then(res=>{
			window.location.reload();
		})
	}

	render(){
		return(
			<li className="list-group-item">
			<Link to={'/book/'+this.state.item.name}>
				{this.state.item.name}
			</Link>
				<span className="badge left">
					<button className="btn btn-primary fa fa-minus" onClick={this.onDelete.bind(this)}></button>
				</span>
			</li>
		)
	}
}
export default BookItem;
