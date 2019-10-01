import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Courses from '../course/Courses';
import Lectures from '../lecturer/Lecturers';
import Students from '../student/Students';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/lecturers" component={Lectures} />
        </Switch>
    );
};

export default Routes;
