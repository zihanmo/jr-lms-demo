import React from 'react';

import Routes from './routes/Routes';
import TopNav from './navigation/TopNav';

function App() {
	return (
		<div>
			<TopNav />
			<main className="container">
				<Routes />
			</main>
		</div>
	);
}

export default App;

// Test CICD
