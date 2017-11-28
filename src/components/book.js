import React from 'react';
import RemoveBook from '../containers/removeBook';

const Book = ({ title, id }) => {

	return (
		<li className="list-group-item">
			{title}<RemoveBook bookId={id} />
		</li>
	);
};

export default Book;