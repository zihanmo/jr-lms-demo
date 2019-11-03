import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { fetchCourses } from '../utils/api/course';

const mockImage = 'https://sdtimes.com/wp-content/uploads/2018/03/jW4dnFtA_400x400.jpg';

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
                    <FlexContainer justifyContentValue="space-between">
                        {this.state.courses.map(course => (
                            <CourseCard
                                courseDescription={course.description}
                                courseImage={mockImage}
                                courseName={course.name}
                                key={course.code}
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
