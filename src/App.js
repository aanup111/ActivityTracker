import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import ActivityList from './components/activityList';
import CreateActivity from './components/createActivity';
import CreateUser from './components/createUser';
import EditActivity from './components/editActivity';

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Routes>
					<Route path="/" exact element={<ActivityList />} />
					<Route path="/edit/:id" element={<EditActivity />} />
					<Route path="/create" element={<CreateActivity />} />
					<Route path="/user" element={<CreateUser />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
