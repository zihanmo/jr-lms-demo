import React from 'react';

import CourseCard from './components/CourseCard';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { fetchCourses } from '../utils/fetch';

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        fetchCourses().then(courses => this.setState({ courses }));
    }

    render() {
        return (
            <React.Fragment>
                <Header as="h2" textAlign="center">
                    Courses
                </Header>
                <FlexContainer>
                    {this.state.courses.map(course => (
                        <CourseCard
                            to={`${COURSE_BASE_URL}/${course.id}`}
                            courseName={course.name}
                            courseImage={course.image}
                            courseDescription={course.description}
                        />
                    ))}
                </FlexContainer> 
            </React.Fragment>
        );
    }
};

export default Courses;
