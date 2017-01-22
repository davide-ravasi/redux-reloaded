import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail.js';

export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>React simple starter</h1>
	      <BookList></BookList>
	      <BookDetail></BookDetail>
      	</div>
    );
  }
}
