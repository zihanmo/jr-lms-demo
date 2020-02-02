import React from 'react';
import { Container, Item, Segment } from 'semantic-ui-react';

import ErrorMessage from '../UI/errorMessage/ErrorMessage';
import Header from '../UI/header/Header';
import PersonInfo from '../UI/personInfo/PersonInfo';
import { fetchStudents } from '../api/student';

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [],
            error: null,
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ error: null, isLoading: true }, () => {
            fetchStudents()
                .then(studentData => this.setState({
                    students: studentData.students,
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
                    Students
                </Header>
                <Container>
                    <Segment basic loading={this.state.isLoading}>
                        <Item.Group divided>
                            {
                                this.state.students.map(student => (
                                    <PersonInfo
                                        courses={student.courses}
                                        email={student.email}
                                        fullName={student.fullName}
                                        image={student.image}
                                        key={student._id}
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

export default Students;
