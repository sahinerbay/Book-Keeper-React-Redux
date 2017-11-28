import { connect } from 'react-redux';
import BookList from '../components/bookList';
import { editBook, removeBook } from '../actions/actionCreators';

const mapStateToProps = state => {
	
	return {
		books: state.books
	}
}



const availableBookList = connect(
	mapStateToProps,
	null
)(BookList)

export default availableBookList