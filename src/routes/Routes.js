import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CourseDetails from '../course/CourseDetails';
import CourseEdit from '../course/CourseEdit';
import CourseNew from '../course/CourseNew';
import Courses from '../course/Courses';
import Lectures from '../lecturer/Lecturers';
import Login from '../login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Students from '../student/Students';
import {
    COURSE_BASE_URL,
    LECTURER_BASE_URL,
    LOGIN_URL,
    STUDENT_BASE_URL,
} from './URLMap';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to={COURSE_BASE_URL} />
            <Route exact path={LOGIN_URL} component={Login} />
            <ProtectedRoute exact path={COURSE_BASE_URL} component={Courses} />
            <ProtectedRoute exact path={`${COURSE_BASE_URL}/new`} component={CourseNew} />
            <ProtectedRoute exact path={`${COURSE_BASE_URL}/:id`} component={CourseDetails} />
            <ProtectedRoute exact path={`${COURSE_BASE_URL}/:id/edit`} component={CourseEdit} />
            <ProtectedRoute exact path={STUDENT_BASE_URL} component={Students} />
            <ProtectedRoute exact path={LECTURER_BASE_URL} component={Lectures} />
        </Switch>
    );
};

export default Routes;
