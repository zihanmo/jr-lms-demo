import React from 'react';
import { Segment } from 'semantic-ui-react';

import CourseForm from './components/CourseForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';

class CourseNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={null} />
                <Header as="h2" textAlign="center">
                    Create Course
                </Header>
                <Segment basic loading={this.state.isCreating}>
                    <CourseForm
                        submitButtonText="Create"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseNew;
