import styled from 'styled-components';

// CUSTOM IMPORTS
import NoteList from './components/Notes';
import UserForm from './components/UserForm';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Notes = styled(NoteList)`
  max-width: 400px;
`;

export const Form = styled(UserForm)`
  max-width: 400px;
  width: 100%;
`;
