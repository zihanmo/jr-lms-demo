import React from 'react';

import CourseForm from './components/CourseForm';
import Header from '../UI/header/Header';
import { fetchCourseById, saveCourseById } from '../utils/api/course';

class CourseEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            description: '',
            image: '',
            name: '',
        };
    }

    componentDidMount() {
        const courseId = this.props.match.params.id;
        fetchCourseById(courseId).then(course => this.setState({
            code: course.code,
            description: course.description,
            image: course.image,
            name: course.name,
        }));
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleSave = () => {
        const course = { ...this.state };
        saveCourseById(this.props.match.params.id, course);
    }

    render() {
        return (
            <React.Fragment>
                <Header as="h2" textAlign="center">
                    Edit Course
                </Header>
                <CourseForm
                    code={this.state.code}
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSave}
                    image={this.state.image}
                    name={this.state.name}
                    submitButtonText="Save"
                />
            </React.Fragment>
        );
    }
};

export default CourseEdit;
