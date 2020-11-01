import React from 'react';
import * as Yup from 'yup';
import { MdPerson, MdEmail } from 'react-icons/md';

// CUSTOM IMPORTS
import { Card, Form, Title, Input } from './styles';
import { isDataValid } from '~/utils/validations';
import { getYupErrors } from '~/utils/yup';

function UserForm({ className }) {
  // REFS
  const formRef = React.useRef(null);

  // FUNCTIONS
  const handleSubmit = React.useCallback(async (data, photo) => {
    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        description: Yup.string().required('A Descrição da nota é obrigatória'),
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
    <div className={className}>
      <Title>Meu Perfil</Title>
      <Card>
        <Form ref={formRef}>
          <Input
            name="name"
            placeholder="Digite seu nome"
            icon={<MdPerson />}
          />

          <Input
            name="email"
            placeholder="Digite seu email"
            icon={<MdEmail />}
          />
        </Form>
      </Card>
    </div>
  );
}

export default UserForm;
