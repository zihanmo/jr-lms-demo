import React from 'react';
import { Segment } from 'semantic-ui-react';

import CourseInfo from './components/CourseInfo';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';

class CourseDetails extends React.Component {
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
                    Course Details
                </Header>
                <Segment basic loading={false}>
                    <CourseInfo
                    />
                </Segment>
            </React.Fragment>
        );
    }
};

export default CourseDetails;
