import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/actionCreators';
import  DeleteButton from '../components/deleteButton';


const mapDispatchToProps = (dispatch, ownProps) => {
	
	return {
		onRemoveBook: () => {
			dispatch(removeBook(ownProps.bookId))
		}
	}
}

const RemoveBook = connect(null, mapDispatchToProps)(DeleteButton)

export default RemoveBook;