/**
 *
 */
import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import BookItem from './BookItem';

class Book extends Component{
	constructor(){
		super();
		this.state = {
			books: []
		}
	}
	componentWillMount(){
		this.getBooks();
	}
	getBooks(){
		axios.get('http://localhost:8080/Allbook').then(response=>{
			this.setState({books : response.data}, () => {
				console.log(this.state);
			})
		})
	}
	render(){
		var bookItem = this.state.books.map((book, i)=>{
			return(
				<BookItem key = {book.id} item = {book} />
			)
		})
		return(
			<div>
				<h1>BOOKS</h1>
				<ul className="list-group">
					{bookItem}
				</ul>
				<Link to="/add">ADD BOOK</Link>
			</div>
		)
	}
}
export default Book;
