let initialState = {
	books: [
		{
			title: 'Istanbul: Memories and the City by Orhan Pamuk',
			description: 'Istanbul: Memories and the City is a largely autobiographical memoir by Orhan Pamuk that is deeply melancholic.',
			id: 1
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
						description: action.books.description,
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
				books:
					state.books.filter((book) => {
						return book.id !== action.books.id
					})
			})
		default:
			return state
	}
}

export default bookApp;