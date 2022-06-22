import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    language: 'pt-BR',
    api_key: '8e58087a8c2c0ca55cd730c857be5784',
  }
});

export default api;