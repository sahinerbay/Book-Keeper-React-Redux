import React from 'react';
import PropTypes from 'prop-types';

import RemoveBook from '../containers/removeBook';

const Book = ({ title, description, id, index }) => {

	return (
		<div>
			<div className="media-left media-middle">
				{index}
			</div>
			<div className="media-body">
				<RemoveBook bookId={id} />
				<h4 className="media-heading">{title}</h4>
				{description}
			</div>
		</div>
	);
};

Book.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.number,
	index: PropTypes.number,
}

export default Book;