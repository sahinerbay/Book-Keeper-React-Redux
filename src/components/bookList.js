import React from 'react';
import PropTypes from 'prop-types';

import Book from './book';

const BookList = ({ books }) => {

	const isBookAvailable = (books) => {
		if (!books.length) {
			return <p className="text-danger">No available books at the moment! Please add one!</p>
		}
		return (
			<div className="media">
				{books.map((book, index) => {
					return (
						<Book key={book.id} {...book} index={index + 1} />
					)
				})}
			</div>
		)
	}
	return (
		<div>
			<h2>Available Books</h2>
			{isBookAvailable(books)}
		</div>
	);
};

BookList.propTypes = {
	books: PropTypes.array,
}

export default BookList;