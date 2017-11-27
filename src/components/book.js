import React from 'react';

const Book = ({book}) => {
	console.log(book)
	return (
		<div>
			<li>{book.title}</li>
		</div>
	);
};

export default Book;