import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/actionCreators';

let AddBook = ({ dispatch }) => {
	let input

	return (
		<div>
			<form className="form-inline"
				onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return
					}

					dispatch(addBook(input.value))
					input.value = ''
				}}
			>
				<input className="form-control"
					ref={node => {
						input = node
					}}
				/>
				<button className="btn btn-success pull-right" type="submit">
					Add Books
        </button>
			</form>
		</div>
	)
};

AddBook = connect()(AddBook)

export default AddBook;