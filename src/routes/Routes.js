import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CourseDetails from '../course/CourseDetails';
import CourseEdit from '../course/CourseEdit';
import CourseNew from '../course/CourseNew';
import Courses from '../course/Courses';
import Lectures from '../lecturer/Lecturers';
import Students from '../student/Students';
import {
    COURSE_BASE_URL,
    LECTURER_BASE_URL,
    STUDENT_BASE_URL,
} from './URLMap';

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to={COURSE_BASE_URL} />
            <Route exact path={COURSE_BASE_URL} component={Courses} />
            <Route exact path={`${COURSE_BASE_URL}/new`} component={CourseNew} />
            <Route exact path={`${COURSE_BASE_URL}/:id`} component={CourseDetails} />
            <Route exact path={`${COURSE_BASE_URL}/:id/edit`} component={CourseEdit} />
            <Route exact path={STUDENT_BASE_URL} component={Students} />
            <Route exact path={LECTURER_BASE_URL} component={Lectures} />
        </Switch>
    );
};

export default Routes;
