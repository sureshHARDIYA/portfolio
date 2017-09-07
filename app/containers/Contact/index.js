/* eslint-disable no-trailing-spaces,react/sort-comp */
/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Header from './styles/header';
import { Wrapper, FormGroup } from './styles/wrappers';
import InputField from './Inputs';
import TextArea from './styles/textarea';
import Button from './styles/button';
import { isString, isEmail, isPhoneNumber } from './validator';

class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    email: '',
    tel: '',
    message: '',
  }

  onInputChange = (e, inputName) =>
    this.setState({ [inputName]: e.target.value });

  validateInputFields = ({ name, email, tel, message }) => {
    const isNameValid = isString.test(name);
    const isEmailValid = isEmail.test(email);
    const isTelValid = isPhoneNumber.test(tel);
    const isMessageValid = (typeof message === 'string' && message.trim().length !== 0);
    return (isNameValid, isEmailValid, isMessageValid, isTelValid);
  }

  sendEmail = () => {
c
  }

  format = () => {
    //  format message
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // noinspection JSDeclarationsAtScopeStart
    const formData = Object.assign({}, { ...this.state });
    const validated = this.validateInputFields(formData);
    if (validated) {
      this.sendEmail(this.format(formData));
    }
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
            <form action="" method="" onSubmit={this.onFormSubmit}>
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
                  name: '_replyto',
                  type: 'email',
                  placeholder: 'Email Address',
                  val: email,
                  onInputChange: this.onInputChange,
                }}
              />
              <InputField
                config={{
                  type: 'tel',
                  placeholder: 'Phone',
                  val: tel,
                  onInputChange: this.onInputChange,
                }}
              />
              <FormGroup>
                <TextArea
                  placeholder="Send A message"
                  onChange={(e) => this.onInputChange(e, 'message')}
                  autoCorrect
                >{this.state.message}</TextArea>
              </FormGroup>
              <FormGroup>
                <Button type="submit">Submit</Button>
              </FormGroup>
              <input type="hidden" name="_subject" value="New submission! 😁" />
              <input type="hidden" name="_next" value="//site.io/thanks.html" />
            </form>
          </FormGroup>
        </Wrapper>
      </div>
    );
  }
}

export default FeaturePage;
