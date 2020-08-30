import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaGithub } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';

// CUSTOM IMPORTS
import Button from '~/components/Button';
import { getYupErrors } from '~/utils/yup';
import { isDataValid } from '~/utils/validations';
import { Container, Input } from './styles';

export default function SignIn() {
  // REFS
  const formRef = React.useRef();

  // FUNCTION
  const handleSubmit = React.useCallback(async data => {
    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O nome é obrigatório.'),

        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      // Format yup errors
      const errors = getYupErrors(err);

      // Set errors into form inputs
      if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <FaGithub className="auth-logo" />

        <h1 className="auth-title">Faça seu login</h1>

        <Input
          className="auth-input"
          name="email"
          placeholder="Email"
          icon={<MdEmail />}
        />

        <Input
          className="auth-input"
          name="password"
          placeholder="Senha"
          icon={<MdLock />}
        />

        <Button type="submit" className="auth-button">
          Fazer Login
        </Button>

        <footer className="auth-footer">
          <p>Aínda não possuí uma conta?</p>
          <Link to="/signUp">Fazer cadastro</Link>
        </footer>
      </Form>
    </Container>
  );
}
