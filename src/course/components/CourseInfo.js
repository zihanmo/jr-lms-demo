import React from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from '../../UI/header/Header';
import { deleteCourseById } from '../../utils/fetch';

const CourseInfo = props => {
    const currentPath = props.location.pathname;
    const courseId = props.match.params.id;

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
            <Button onClick={() => deleteCourseById(courseId)} color="red">
                Delete
            </Button>
        </Container>
    );
};

export default withRouter(CourseInfo);
