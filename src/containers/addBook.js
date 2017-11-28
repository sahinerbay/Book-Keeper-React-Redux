import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/actionCreators';

let AddBook = ({ dispatch }) => {

	let inputTitle = null;
	let inputDescription = null;

	const onHandleSubmit = (event) => {
		event.preventDefault();

		if (!inputTitle.value.trim() || !inputDescription.value.trim()) {
			return
		}

		dispatch(addBook(inputTitle.value, inputDescription.value))
		inputTitle.value = ''
		inputDescription.value = ''
	}

	return (
		<div>
			<form
				className="form-horizontal"
				onSubmit={event => onHandleSubmit(event)}
			>

				<div className="form-group">
					<label htmlFor="inputTitle" className="col-sm-3 control-label">Title:</label>
					<div className="col-sm-9">
						<input
							id="inputTitle"
							placeholder="Title"
							className="form-control"
							ref={node => inputTitle = node}
						/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="inputDescription" className="col-sm-3 control-label">Description:</label>
					<div className="col-sm-9">
						<input
							id="inputDescription"
							placeholder="Description"
							className="form-control"
							ref={node => inputDescription = node}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-3 col-sm-9">
						<button
							className="btn btn-success btn-block"
							type="submit">
							Add Book
        		</button>
					</div>
				</div>

			</form>
		</div>
	)
};

export default AddBook = connect()(AddBook)