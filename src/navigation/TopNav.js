import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router"

import {
	COURSE_BASE_URL,
	LECTURER_BASE_URL,
	LOGIN_URL,
	STUDENT_BASE_URL,
} from '../routes/URLMap';
import { isLoggedIn, removeToken } from '../utils/auth';

import './styles/topNav.scss';

const logout = history => {
	removeToken();
	history.push(LOGIN_URL);
};

const TopNav = ({ history }) => {

	if (!isLoggedIn()) return null;
	
	return (
		<nav className="nav-bar">
			<NavLink className="nav-item" activeClassName="nav-item--active" to={COURSE_BASE_URL}>
				Courses
			</NavLink>
			<NavLink className="nav-item" activeClassName="nav-item--active" to={STUDENT_BASE_URL}>
				Students
			</NavLink>
			<NavLink className="nav-item" activeClassName="nav-item--active" to={LECTURER_BASE_URL}>
				Lecturers
			</NavLink>
			<Button onClick={() => logout(history)} className="nav-logout">
				Log out
			</Button>
		</nav>
	);
};

export default withRouter(TopNav);
