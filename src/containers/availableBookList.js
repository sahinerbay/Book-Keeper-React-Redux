import { connect } from 'react-redux';
import BookList from '../components/bookList';
import { editBook, removeBook } from '../actions/actionCreators';

const mapStateToProps = state => {
	
	return {
		books: state.books
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onEditBook: (title, id) => {
			dispatch(editBook(title, id))
		},
		onRemoveBook: id => {
			dispatch(removeBook(id))
		}
	}
}

const availableBookList = connect(
	mapStateToProps,
	mapDispatchToProps
)(BookList)

export default availableBookList