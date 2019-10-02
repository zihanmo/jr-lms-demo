import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import '../styles/courseCardStyle.scss';

const CourseCard = props => {
    return (
        <Card className="course-card">
            <Image src={props.courseImage} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.courseName}</Card.Header>
                <Card.Description>
                    {props.courseDescription}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CourseCard;
