import api from '~/services/api';

export const getNotes = ({ setNotes, setIsLoaded }) =>
  Promise.resolve(api.server.get('/posts')).then(response => {
    setNotes(response.data);
    setIsLoaded(true);
  });

export const createNote = ({ noteData }) =>
  Promise.resolve(api.server.post('/posts', noteData));
