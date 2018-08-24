import React from 'react';
import {Switch, Route} from 'react-router';
import Book from './Book';
import AddBook from './AddBook';
import BookInfo from './BookInfo';

const Main = () =>(
		<div>
		 <main>
		  <Switch>
		  	<Route exact path="/" component={Book}/>
			  <Route exact path="/add" component={AddBook}/>
				<Route exact path="/book/:id" component={BookInfo}/>
		  </Switch>
		 </main>
		</div>
)

export default Main;
