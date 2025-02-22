import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourapi.com',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};