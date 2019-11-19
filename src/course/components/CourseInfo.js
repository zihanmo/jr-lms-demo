import React from 'react';
import { Button, Container, Divider, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Header from '../../UI/header/Header';

const CourseInfo = props => {
    const {
        deleteCourse,
        description,
        image,
        isDeleting,
        location: { pathname: currentPath },
        name,
    } = props;

    return (
        <Container textAlign="center">
            <Image src={image} wrapped size="medium" />
            <Header as="h3">
                {name}
            </Header>
            <p>
                {description}
            </p>
            <Divider />
            <Button as={Link} to={`${currentPath}/edit`} primary>
                Edit
            </Button>
            <Button loading={isDeleting} onClick={deleteCourse} color="red">
                Delete
            </Button>
        </Container>
    );
};

export default withRouter(CourseInfo);
