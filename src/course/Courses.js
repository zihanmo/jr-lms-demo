import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
        const currentPath = this.props.location.pathname;

        return (
            <React.Fragment>
                <Header as="h2" textAlign="center">
                    Courses
                </Header>
                <Container>
                    <Button as={Link} to={`${currentPath}/new`} primary>
                        Create New Course
                    </Button>
                    <FlexContainer>
                        {this.state.courses.map(course => (
                            <CourseCard
                                courseDescription={course.description}
                                courseImage={course.image}
                                courseName={course.name}
                                key={course.id}
                                to={`${COURSE_BASE_URL}/${course.id}`}
                            />
                        ))}
                    </FlexContainer> 
                </Container>
            </React.Fragment>
        );
    }
};

export default Courses;
