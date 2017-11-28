import React from 'react';

const DeleteButton = ({ onRemoveBook }) => {

	return (
			<button className="close" onClick={() => {
				onRemoveBook()
			}}><span>&times;</span></button>
	);
};

export default DeleteButton;