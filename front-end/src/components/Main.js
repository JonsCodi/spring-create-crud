import React from 'react';
import {Switch, Route} from 'react-router';
import Book from './Book';

const Main = () =>(
		<div>
		 <main>
		  <Switch>
		  	<Route exact path="/" component={Book}/>
		  </Switch>
		 </main>
		</div>
)

export default Main;