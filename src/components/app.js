import React, { Component } from 'react';

import BookList from '../containers/book_list';


export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>React simple starter</h1>
	      <BookList></BookList>
      	</div>
    );
  }
}