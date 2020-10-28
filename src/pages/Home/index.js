import React from 'react';
import { MdAccountCircle, MdSearch } from 'react-icons/md';
import * as Yup from 'yup';

// CUSTOM IMPORTS
import { toast } from 'react-toastify';
import {
  Container,
  Form,
  FormTitle,
  Input,
  FieldSet,
  Button,
  Repos,
  RepoTitle,
  Repo,
} from './styles';
import { isDataValid, isListValid } from '~/utils/validations';
import { getYupErrors } from '~/utils/yup';
import api from '~/services/api';

function Home() {
  const formRef = React.useRef();

  // STATES
  const [repos, setRepos] = React.useState({});
  const [fetching, setFetching] = React.useState(false);

  // FUNCTIONS
  const handleSubmit = React.useCallback(async data => {
    async function fetchGithubUser() {
      const { userName } = data;

      setFetching(true);

      await api.github
        .get(`/users/${userName}/repos`)
        .then(response => {
          setRepos(response.data);
        })
        .catch(error => {
          toast.error(error.response.statusText);
        });

      setFetching(false);
    }

    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        userName: Yup.string().required('O nome do usuário é obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      fetchGithubUser();
    } catch (err) {
      // Format yup errors
      const errors = getYupErrors(err);

      // Set errors into form inputs
      if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormTitle>Buscar repositórios de um usuário</FormTitle>

          <FieldSet>
            <Input
              name="userName"
              placeholder="Digite o nome do usuário"
              icon={<MdAccountCircle />}
            />

            <Button type="submit" loading={fetching}>
              <MdSearch id="search-icon" title="Buscar" />
            </Button>
          </FieldSet>
        </Form>

        {isListValid(repos) && (
          <Repos>
            <RepoTitle>Repositórios</RepoTitle>

            {repos.map(repo => (
              <Repo
                key={repo.id}
                onClick={() => {
                  window.open(repo.html_url);
                }}
              >
                <h4>{repo.name}</h4>
                <small>{repo.description}</small>
              </Repo>
            ))}
          </Repos>
        )}
      </div>
    </Container>
  );
}

export default Home;
