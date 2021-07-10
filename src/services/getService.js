import API from '../api/api';

export const get = (endpoint) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

