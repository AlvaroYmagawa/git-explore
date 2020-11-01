import api from '~/services/api';

export const uploadFile = ({ file }) =>
  Promise.resolve(api.server.post('/files', file));
