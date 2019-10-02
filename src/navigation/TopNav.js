import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"

import './styles/topNav.scss';

const COURSES_URL = '/courses';
const STUDENTS_URL = '/students';
const LECTURERS_URL = '/lecturers';

const generateLinkClass = (to, currentPath) => {
	const navItemClass = 'nav-item';
	const isActive = currentPath.includes(to);

	if (isActive) return `${navItemClass} nav-item--active`;

	return navItemClass;
};

const TopNav = ({ location }) => {
	const currentPath = location.pathname;
	
	return (
		<nav className="nav-bar">
			<Link className={generateLinkClass(COURSES_URL, currentPath)} to={COURSES_URL}>
				Courses
			</Link>
			<Link className={generateLinkClass(STUDENTS_URL, currentPath)} to={STUDENTS_URL}>
				Students
			</Link>
			<Link className={generateLinkClass(LECTURERS_URL, currentPath)} to={LECTURERS_URL}>
				Lecturers
			</Link>
		</nav>
	);
};

export default withRouter(TopNav);
