import React from 'react';

import CourseInfo from './components/CourseInfo';
import Header from '../UI/header/Header';
import { fetchCourseById } from '../utils/api/course';

class CourseDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: {},
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        fetchCourseById(courseId).then(course => this.setState({ course }));
    }

    render() {
        return (
            <React.Fragment>
                <Header as="h2" textAlign="center">
                    Course Details
                </Header>
                <CourseInfo
                    name={this.state.course.name}
                    image={this.state.course.image}
                    description={this.state.course.description}
                />
            </React.Fragment>
        );
    }
};

export default CourseDetails;
