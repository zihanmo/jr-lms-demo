import React from 'react';
import { Button, Form, Input, Segment } from 'semantic-ui-react';

import FLexContainer from '../UI/flexContainer/FlexContainer';
import { COURSE_BASE_URL } from '../routes/URLMap';
import { login as loginFn} from '../utils/fetch';
import { setToken } from '../utils/auth';

import './styles/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isLoading: false,
            password: '',
        };
    }

    handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value } );
    }

    login = () => {
        this.setState({ isLoading: true }, async () => {
            const jwtToken = await loginFn(this.state.email, this.state.password);
            setToken(jwtToken);
            this.props.history.replace(COURSE_BASE_URL);
        });
    }

    render() {
        return (
            <FLexContainer justifyContentValue="center">
                <Form className="login-form" size="large" loading={this.state.isLoading}>
                    <Segment stacked>
                        <Form.Field>
                            <Input
                                icon='user'
                                iconPosition='left'
                                name="email"
                                onChange={this.handleChange}
                                placeholder='E-mail address'
                                value={this.state.email}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                icon='lock'
                                iconPosition='left'
                                name="password"
                                onChange={this.handleChange}
                                placeholder='Password'
                                type="password"
                                value={this.state.password}
                            />
                        </Form.Field>
                        <Button
                            size="large"
                            fluid
                            primary
                            onClick={this.login}
                        >
                            Login
                        </Button>
                    </Segment>
                </Form>
            </FLexContainer>
        );
    }
};

export default Login;
