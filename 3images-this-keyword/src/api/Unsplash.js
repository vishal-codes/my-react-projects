import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID 8nKKRzBNfcPPtU9NuwDNgqLFDBmZuq3m2ZseNUys2Eo'
    }
});