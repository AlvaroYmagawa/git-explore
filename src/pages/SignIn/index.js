import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaGithub } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { signIn } from '~/store/modules/auth/actions';

// CUSTOM IMPORTS
import Button from '~/components/Button';
import { getYupErrors } from '~/utils/yup';
import { isDataValid } from '~/utils/validations';
import { Container, Input } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const isSigningIn = useSelector(state => state.auth.isSigningIn);

  // REFS
  const formRef = React.useRef();

  // FUNCTION
  const handleSubmit = React.useCallback(
    async data => {
      try {
        const dispatchSubmit = () => {
          dispatch(signIn(data));
        };

        // Clear errors
        if (isDataValid(formRef.current)) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('O email é obrigatório.'),

          password: Yup.string().required('A senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatchSubmit();
      } catch (err) {
        // Format yup errors
        const errors = getYupErrors(err);

        // Set errors into form inputs
        if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
      }
    },
    [dispatch]
  );

  return (
    <Container>
      <Form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <FaGithub className="auth-logo" />

        <h1 className="auth-title">Faça seu login</h1>

        <Input
          type="email"
          className="auth-input"
          name="email"
          placeholder="Email"
          icon={<MdEmail />}
        />

        <Input
          type="password"
          className="auth-input"
          name="password"
          placeholder="Senha"
          icon={<MdLock />}
        />

        <Button type="submit" className="auth-button" loading={isSigningIn}>
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
