import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router"

import {
	COURSE_BASE_URL,
	LECTURER_BASE_URL,
	LOGIN_URL,
	STUDENT_BASE_URL,
} from '../routes/URLMap';
import { isLoggedIn, removeToken } from '../utils/auth';

import './styles/topNav.scss';

const generateLinkClass = (to, currentPath) => {
	const navItemClass = 'nav-item';
	const isActive = currentPath.includes(to);

	if (isActive) return `${navItemClass} nav-item--active`;

	return navItemClass;
};

const logout = history => {
	removeToken();
	history.push(LOGIN_URL);
};

const TopNav = ({ history, location }) => {
	const currentPath = location.pathname;

	if (!isLoggedIn()) return null;
	
	return (
		<nav className="nav-bar">
			<Link className={generateLinkClass(COURSE_BASE_URL, currentPath)} to={COURSE_BASE_URL}>
				Courses
			</Link>
			<Link className={generateLinkClass(STUDENT_BASE_URL, currentPath)} to={STUDENT_BASE_URL}>
				Students
			</Link>
			<Link className={generateLinkClass(LECTURER_BASE_URL, currentPath)} to={LECTURER_BASE_URL}>
				Lecturers
			</Link>
			<Button onClick={() => logout(history)} className="nav-logout">
				Log out
			</Button>
		</nav>
	);
};

export default withRouter(TopNav);
