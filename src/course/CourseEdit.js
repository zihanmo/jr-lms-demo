import React from 'react';
import { Segment } from 'semantic-ui-react';

import CourseForm from './components/CourseForm';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';

class CourseEdit extends React.Component {
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
                    Edit Course
                </Header>
                <Segment basic loading={false}>
                    <CourseForm
                        submitButtonText="Save"
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseEdit;
