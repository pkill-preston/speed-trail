import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api-formula-1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '33687d0644msh16eccaebe4929f6p10111cjsn942a5040506b',
    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
  },
});

export default instance;
