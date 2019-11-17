import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router"

import {
	COURSE_BASE_URL,
	LECTURER_BASE_URL,
	STUDENT_BASE_URL,
} from '../routes/URLMap';

import './styles/topNav.scss';

const TopNav = () => {
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
		</nav>
	);
};

export default withRouter(TopNav);
