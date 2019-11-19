import React from 'react';
import { Button, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CourseCard from './components/CourseCard';
import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import FlexContainer from '../UI/flexContainer/FlexContainer';
import Header from '../UI/header/Header';
import { COURSE_BASE_URL } from '../routes/URLMap';

class Courses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={null} />
                <Header as="h2" textAlign="center">
                    Courses
                </Header>
                <Container>
                    <Button as={Link} to={`${COURSE_BASE_URL}/new`} primary>
                        Create New Course
                    </Button>
                    <Segment basic loading={false}>
                        <FlexContainer justifyContentValue="space-between">
                            <CourseCard />
                        </FlexContainer>
                    </Segment>
                </Container>
            </React.Fragment>
        );
    }
};

export default Courses;
