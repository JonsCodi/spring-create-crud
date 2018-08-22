import React,{Component} from 'react';

class BookItem extends Component{
	constructor(props){
		super(props);
		this.state = {
				item : props.item
		}
	}
	render(){
		return(
			<li>{this.state.item.name} </li>
		)
	}
}
export default BookItem;