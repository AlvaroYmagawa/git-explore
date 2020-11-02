import api from '~/services/api';

export const getNotes = ({ setNotes, setIsLoaded, search = '' }) =>
  Promise.resolve(api.server.get('/posts', { params: { search } })).then(
    response => {
      setNotes(response.data);
      setIsLoaded(true);
    }
  );

export const createNote = ({ noteData }) =>
  Promise.resolve(api.server.post('/posts', noteData));
