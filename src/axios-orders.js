import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c91e2.firebaseio.com/'
});

export default instance;