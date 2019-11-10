import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import PersonManagement from '../../UI/personManagement/PersonManagement';
import { fetchStudents } from '../../utils/api/student';

class StudentManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isSearching: false,
            pagination: {},
            studentToAdd: '',
            studentToRemove: '',
            students: [],
        };
    }

    searchStudent = query => {
        this.setState({ isSearching: true }, () => {
            fetchStudents(1, 100, query)
                .then(studentData => this.setState({
                    isSearching: false,
                    pagination: studentData.pagination,
                    students: studentData.students,
                }))
                .catch(error => this.setState({ error }));

        });
    }

    setStudentToAdd = studentToAdd => this.setState({ studentToAdd });

    render() {
        return (
            <Modal
                trigger={<Button positive>Manage Students</Button>}
            >
                <PersonManagement
                    handlePersonToAddChange={this.setStudentToAdd}
                    handleSearchChange={this.searchStudent}
                    isSearching={this.state.isSearching}
                    personsToAdd={this.state.students}
                    personToAdd={this.state.studentToAdd}
                    personToRemove={this.state.studentToRemove}
                />
            </Modal>
        );
    }
}

export default StudentManagement;
