import React from 'react';
import { Button, Form, Header, Input, Segment } from 'semantic-ui-react';

import FlexContainer from '../UI/flexContainer/FlexContainer';

import './styles/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <FlexContainer justifyContentValue="center">
                <Form
                    className="login-form" size="large"
                >
                    <Header size="large" textAlign="center">
                        Learning Management System
                    </Header>
                    <Segment stacked>
                        <Form.Field>
                            <Input
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type="password"
                            />
                        </Form.Field>
                        <Button
                            size="large"
                            fluid
                            primary
                        >
                            Login
                        </Button>
                    </Segment>
                </Form>
            </FlexContainer>
        );
    }
};

export default Login;
