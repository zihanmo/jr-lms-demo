import React from 'react';
import { Button, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from '../../UI/header/Header';

const CourseInfo = props => {
    const currentPath = props.location.pathname;

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
        </Container>
    );
};

export default withRouter(CourseInfo);
