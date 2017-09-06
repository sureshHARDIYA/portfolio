import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from './styles/wrappers';
import Input from './styles/input';

const InputField = (props) => {
  const { type, name, placeholder, onInputChange, value } = props.config;
  return (
    <FormGroup>
      <Input
        type={type || 'text'}
        name={name || type}
        placeholder={placeholder}
        autoComplete={type}
        autoCorrect={false}
        value={value}
        onChange={(e) => onInputChange(e, name)}
        required
      />
    </FormGroup>
  );
};


InputField.propTypes = {
  config: PropTypes.objectOf({
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onInputChange: PropTypes.func,
  }).isRequired,
};

export default InputField;
