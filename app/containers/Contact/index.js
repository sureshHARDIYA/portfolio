/* eslint-disable no-trailing-spaces,react/sort-comp,one-var,arrow-body-style,no-restricted-syntax,no-return-assign,no-param-reassign,no-unused-expressions */

import React from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Header from './styles/header';
import { Wrapper, FormGroup } from './styles/wrappers';
import InputField from './Inputs';
import TextArea from './styles/textarea';
import Button from './styles/button';
import Notifier from './styles/notifier';
import { validateInputFields } from './validator';

class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    email: '',
    tel: '',
    message: '',
    status: null,
  };
  delayStatusReset = () =>
    setTimeout(() => this.setState({ status: null }), 3000);

  resetState = () => {
    const state = Object.assign({}, this.state);
    const reset = Object.keys(state).reduce((cur, prev) => {
      prev === 'status' ? (cur[prev] = this.state.status) : (cur[prev] = '');
      return cur;
    }, {});
    this.setState(reset);
    return this.delayStatusReset();
  };

  onInputChange = (e, inputName) =>
    this.setState({ [inputName]: e.target.value });

  sendEmail = ({ name, tel, email, message }) => {
    axios
      .post('http://formspree.io/gregjarvez@gmail.com', {
        header: { 'content-type': 'application/html' },
        data: {
          message: {
            name,
            tel,
            email,
            message,
          },
        },
      })
      .then((response) => this.setState({ status: response.status }));
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    // noinspection JSDeclarationsAtScopeStart
    const formData = Object.assign({}, { ...this.state });
    if (validateInputFields(formData)) {
      this.sendEmail(formData);
      this.resetState();
      return false;
    }

    return this.setState({ status: 400 });
  };

  render() {
    const { name, email, tel } = this.state;
    return (
      <div>
        <Helmet
          title="Get in touch"
          meta={[
            {
              name: 'description',
              content: 'Contact us page',
            },
          ]}
        />
        <Wrapper>
          <Header>CONTACT ME</Header>
          <FormGroup>
            <form onSubmit={this.onFormSubmit}>
              <InputField
                config={{
                  name: 'name',
                  placeholder: 'Full Name',
                  val: name,
                  onInputChange: this.onInputChange,
                }}
              />
              <InputField
                config={{
                  type: 'email',
                  placeholder: 'Email Address',
                  val: email,
                  onInputChange: this.onInputChange,
                }}
              />
              <InputField
                config={{
                  name: 'phone',
                  type: 'tel',
                  placeholder: 'Phone',
                  val: tel,
                  onInputChange: this.onInputChange,
                }}
              />
              <FormGroup>
                <TextArea
                  placeholder="Send A message"
                  name="message"
                  onChange={(e) => this.onInputChange(e, 'message')}
                  autoCorrect
                  value={this.state.message}
                >
                  {this.state.message}
                </TextArea>
              </FormGroup>
              <FormGroup>
                <Button type="submit">Submit ➣</Button>
              </FormGroup>
              <input type="hidden" name="_subject" value="New submission! 😁" />
            </form>
          </FormGroup>
          <FormGroup>
            {this.state.status === 200 &&
              <Notifier status={this.state.status}>
                Thank you! I will speak to you soon 😉
              </Notifier>}
          </FormGroup>
        </Wrapper>
      </div>
    );
  }
}

export default FeaturePage;
