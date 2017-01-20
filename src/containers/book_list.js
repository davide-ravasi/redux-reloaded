import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return <li>{book.title}</li>
		});
	}

	render() {
		return (
			<ul>{this.renderList()}</ul>
		);
	}
}



function mapStateToProps(state) {
	// whatewver is returnes will show up as props
	// inside of Booklist
	// every time the list of books change the DOM is
	// re-rendered
	// the component serve as a props the list to
	// the book-list class
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);