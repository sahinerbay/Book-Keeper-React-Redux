const ADD_BOOK = 'ADD_BOOK'
const EDIT_BOOK = 'EDIT_BOOK'
const REMOVE_BOOK = 'REMOVE_BOOK'

let bookId = 1;

export function addBook(title) {
	return {
		type: ADD_BOOK,
		books: {
			title,
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