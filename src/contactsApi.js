import axios from 'axios';

axios.defaults.baseURL = 'https://64520ce4a2860c9ed400a177.mockapi.io';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async data => {
  axios.post('/contacts', data);
};

export const delContact = async id => {
  axios.delete(`contacts/${id}`);
};
