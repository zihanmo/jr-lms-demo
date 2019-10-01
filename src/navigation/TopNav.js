import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<nav>
			<Link to="/courses">
				Courses
			</Link>
			<Link to="/students">
				Students
			</Link>
			<Link to="/lecturers">
				Lecturers
			</Link>
		</nav>
	);
};

export default TopNav;
