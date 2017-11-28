import React from 'react';

import AddBook from '../containers/addBook';
import AvailableBookList from '../containers/availableBookList';

const App = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-xs-12 col-md-9 col-lg-6 col-centered">
				<h1>Book-Keeper</h1>
				<AddBook />
				<AvailableBookList />
			</div>
		</div>
	</div>
)

export default App