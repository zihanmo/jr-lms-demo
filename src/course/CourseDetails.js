import React from 'react';

import CourseInfo from './components/CourseInfo';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import { fetchCourseById } from '../utils/api/course';

class CourseDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {},
            error: null,
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        fetchCourseById(courseId)
            .then(course => this.setState({ course }))
            .catch(this.setErrorState);
    }

    setErrorState = error => this.setState({ error });

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Course Details
                </Header>
                <CourseInfo
                    name={this.state.course.name}
                    image={this.state.course.image}
                    description={this.state.course.description}
                    setErrorState={this.setErrorState}
                />
            </React.Fragment>
        );
    }
};

export default CourseDetails;
