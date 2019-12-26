import axios from 'axios';

const KEY = 'AIzaSyBpJceHfkZX4wmI14C1olfpL34pPU4U22E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});