import React from 'react';
import Book from './book';

const BookList = ({ books, onEditBook, onRemoveBook }) => {
	return (
		<ul>
			{books.map(book => {
				
				return (
					<Book key={book.id} book = {book}/>
				)
			})}

		</ul>
	);
};

export default BookList;