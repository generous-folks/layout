import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { Row, Col } from '../../components/grid.components';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <Row justify="center" container>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Card style={{ margin: '2.5% auto', padding: '2.5%' }}>
            <CardHeader title="Login" />
            <CardContent>
              <Row container spacing={6}>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    required
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    id="email"
                    label="Your Email"
                    fullWidth
                  />
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    required
                    type="password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.password}
                    id="password"
                    label="Your Password"
                    fullWidth
                  />
                </Col>
              </Row>
            </CardContent>
            <Row style={{ display: 'flex', justifyContent: 'center' }} container spacing={6}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Button onClick={this.handleSubmit} variant="outlined" color="primary">
                  Login
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

Login.propTypes = { login: PropTypes.func.isRequired };
