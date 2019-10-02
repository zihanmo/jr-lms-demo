import React from 'react';

import CourseCard from './components/CourseCard';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';

import { courses } from '../utils/mockCourseData';

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses,
        };
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
                            courseName={course.courseName}
                            courseImage={course.courseImage}
                            courseDescription={course.courseDescription}
                        />
                    ))}
                </FlexContainer> 
            </React.Fragment>
        );
    }
};

export default Courses;
