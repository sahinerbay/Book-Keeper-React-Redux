const bookApp = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_BOOK':
			return Object.assign({}, state, {
				books: [
					...state.books,
					{
						title: action.title
					}
				]
			})
		case 'EDIT_BOOK':
			return Object.assign({}, state, {
				books: state.books.map((book, index) => {
					if (index === action.index) {
						return Object.assign({}, book, {
							title: action.title,
							id: action.id
						})
					}
					return book
				})
			})
		case 'REMOVE_BOOK':
			return Object.assign({}, state, {
				books: state.books.filter((book, index) => {
					if (index !== action.index) {
						return Object.assign({}, book)
					}
				})
			})
		default:
			return state
	}
}

export default bookApp;