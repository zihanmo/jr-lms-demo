import React from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from '../../UI/header/Header';
import { COURSE_BASE_URL } from '../../routes/URLMap';
import { deleteCourseById } from '../../utils/api/course';

const CourseInfo = props => {
    const currentPath = props.location.pathname;
    const courseId = props.match.params.id;
    const handleDeleteCourse = () => {
        deleteCourseById(courseId).then(() => {
            props.history.push(COURSE_BASE_URL);
        });
    };

    return (
        <Container textAlign="center">
            <Image src={props.image} wrapped size="medium" />
            <Header as="h3">
                {props.name}
            </Header>
            <p>
                {props.description}
            </p>
            <Button as={Link} to={`${currentPath}/edit`} primary>
                Edit
            </Button>
            <Button onClick={handleDeleteCourse} color="red">
                Delete
            </Button>
        </Container>
    );
};

export default withRouter(CourseInfo);
