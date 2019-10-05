import React from 'react';

import CourseForm from './components/CourseForm';
import Header from '../UI/header/Header';
import { createCourse } from '../utils/fetch';

class CourseNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            image: '',
            name: '',
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    handleCreate = () => {
        const course = { ...this.state };
        createCourse(course);
    }

    render() {
        return (
            <React.Fragment>
                <Header as="h2" textAlign="center">
                    Create Course
                </Header>
                <CourseForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleCreate}
                    image={this.state.image}
                    name={this.state.name}
                    submitButtonText="Create"
                />
            </React.Fragment>
        );
    }
};

export default CourseNew;
