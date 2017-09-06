/* eslint-disable no-trailing-spaces */
/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import Header from './styles/header';
import { Wrapper, FormGroup } from './styles/wrappers';
import InputField from './Inputs';
import TextArea from './styles/textarea';
import Button from './styles/button';


class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    email: '',
    tel: '',
    message: '',
  }

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // todo validation check
  };

  onInputChange = (e, inputName) =>
    this.setState({ [inputName]: e.target.value });

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
                  value: name,
                  onInputChange: this.onInputChange,
                }}
              />
              <InputField
                config={{
                  type: 'email',
                  placeholder: 'Email Address',
                  value: email,
                  onInputChange: this.onInputChange,
                }}
              />
              <InputField
                config={{
                  type: 'tel',
                  placeholder: 'Phone',
                  value: tel,
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
            </form>
          </FormGroup>
        </Wrapper>
      </div>
    );
  }
}

export default FeaturePage;
