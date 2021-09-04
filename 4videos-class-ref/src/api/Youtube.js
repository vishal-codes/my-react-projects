import axios from 'axios';

const KEY = 'AIzaSyB3YSEpw6NaBuDswl45bAi97IbFNhn-wX4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 8,
        key: KEY
    }
});