import React from 'react';
import RemoveBook from '../containers/removeBook';

const DeleteButton = ({ onRemoveBook, bookId }) => {

	return (
			<button className="close" onClick={() => {
				onRemoveBook(bookId)
			}}><span>&times;</span></button>
	);
};

export default DeleteButton;