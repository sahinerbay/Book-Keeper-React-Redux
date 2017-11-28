const ADD_BOOK = 'ADD_BOOK'
const EDIT_BOOK = 'EDIT_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

let bookId = 2;

export function addBook(title, description) {
	return {
		type: ADD_BOOK,
		books: {
			title,
			description,
			id: bookId++
		}
	}
}

export function editBook(title, id) {
	return {
		type: EDIT_BOOK,
		books: {
			title,
			id
		}
	}
}

export function removeBook(id) {
	return {
		type: REMOVE_BOOK,
		books: {
			id
		}
	}
}