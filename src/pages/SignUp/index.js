import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FaGithub } from 'react-icons/fa';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import { signUp } from '~/store/modules/auth/actions';

// CUSTOM IMPORTS
import Button from '~/components/Button';
import { getYupErrors } from '~/utils/yup';
import { isDataValid } from '~/utils/validations';
import { Container, Input, Checkbox, Fieldset } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const isSigningUp = useSelector(state => state.auth.isSigningUp);

  // REFS
  const formRef = React.useRef();

  // STATES
  const [isAdmin, setIsAdmin] = React.useState(false);

  // FUNCTION
  const handleSubmit = React.useCallback(
    async data => {
      const dispatchSubmit = () => {
        dispatch(signUp({ userData: data, isAdmin }));
      };

      try {
        // Clear errors
        if (isDataValid(formRef.current)) formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O Nome é obrigatório'),
          email: Yup.string()
            .email('Digite um email válido')
            .required('O nome é obrigatório.'),

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
    [dispatch, isAdmin]
  );

  return (
    <Container>
      <Form className="auth-form" ref={formRef} onSubmit={handleSubmit}>
        <FaGithub className="auth-logo" />

        <h1 className="auth-title">Faça seu Cadastro</h1>

        <Input
          type="text"
          className="auth-input"
          name="name"
          placeholder="Nome Completo"
          icon={<MdPerson />}
        />

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

        <Fieldset>
          <Checkbox checked={isAdmin} onClick={() => setIsAdmin(!isAdmin)} />

          <h4>Criar conta como administradora</h4>
        </Fieldset>

        <Button type="submit" className="auth-button" loading={isSigningUp}>
          Cadastrar
        </Button>

        <footer className="auth-footer">
          <p>Já possuí uma conta?</p>
          <Link to="/">Fazer login</Link>
        </footer>
      </Form>
    </Container>
  );
}
