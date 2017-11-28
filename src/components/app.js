import React from 'react';

import AddBook from '../containers/addBook';
import AvailableBookList from '../containers/availableBookList';

const App = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-3 col-centered">
				<AddBook />
				<AvailableBookList />
			</div>
		</div>
	</div>
)

export default App