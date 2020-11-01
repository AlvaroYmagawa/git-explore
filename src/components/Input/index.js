import React from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { MdError } from 'react-icons/md';
import TextArea from 'react-autosize-textarea';

// CUSTOM IMPORTS
import { Container, InputField, Icon, Error } from './styles';

function Input({ name, icon, className, isTextArea, ...rest }) {
  const inputRef = React.useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  // FUNCTIONS
  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container className={className} isErrored={!!error}>
      <InputField>
        {icon && <Icon>{icon}</Icon>}

        {isTextArea ? (
          <TextArea defaultValue={defaultValue} ref={inputRef} {...rest} />
        ) : (
          <input defaultValue={defaultValue} ref={inputRef} {...rest} />
        )}

        {error && (
          <Error title={error}>
            <MdError />
          </Error>
        )}
      </InputField>
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  isTextArea: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
};

Input.defaultProps = {
  isTextArea: false,
  title: '',
  className: '',
  icon: null,
};

export default Input;
