import api from './BaseAPI';
import cache from 'memory-cache';

export default {
    login: (params) => {
        const url = "http://3.82.224.92:8000/api/v1/accounts/login/"
        return api.postData(url, params);
    }
}