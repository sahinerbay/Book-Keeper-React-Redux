let initialState = {
	books: [
		{
			title: 'hello',
			id: 0
		}
	]
}

const bookApp = (state = initialState, action) => {
	switch (action.type) {

		case 'ADD_BOOK':
		
			return Object.assign({}, state, {
				books: [
					...state.books,
					{
						title: action.books.title,
						id: action.books.id
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