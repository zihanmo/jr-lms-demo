import React from 'react';
import { Container, Item, Segment } from 'semantic-ui-react';

import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import PersonInfo from '../UI/personInfo/PersonInfo';
import { fetchLecturers } from '../utils/api/lecturer';

class Lecturers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lecturers: [],
            error: null,
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ error: null, isLoading: true }, () => {
            fetchLecturers()
                .then(lecturerData => this.setState({
                    lecturers: lecturerData.lecturers,
                    isLoading: false,
                }))
                .catch(error => this.setState({ error }));
        });
    }

    render() {
        return (
            <React.Fragment>
                <ErrorMessage error={this.state.error} />
                <Header as="h2" textAlign="center">
                    Lecturers
                </Header>
                <Container>
                    <Segment basic loading={this.state.isLoading}>
                        <Item.Group divided>
                            {
                                this.state.lecturers.map(lecturer => (
                                    <PersonInfo
                                        courses={lecturer.courses}
                                        email={lecturer.email}
                                        fullName={lecturer.fullName}
                                        image={lecturer.image}
                                        key={lecturer._id}
                                    />
                                ))
                            }
                        </Item.Group>
                    </Segment>
                </Container>
            </React.Fragment>
        );
    }
};

export default Lecturers;
