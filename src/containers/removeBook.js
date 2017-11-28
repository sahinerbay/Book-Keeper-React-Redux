import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/actionCreators';
import  DeleteButton from '../components/deleteButton';


const mapDispatchToProps = dispatch => {
	
	return {
		onRemoveBook: id => {
			dispatch(removeBook(id))
		}
	}
}

const RemoveBook = connect(null, mapDispatchToProps)(DeleteButton)

export default RemoveBook;