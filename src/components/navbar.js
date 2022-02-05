import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to="/" className="navbar-brand">
				Activity Tracker
			</Link>
			<div className="navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/" className="nav-link">
							Activities
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create" className="nav-link">
							Create Activity Log
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/user" className="nav-link">
							Create User
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default navbar;
