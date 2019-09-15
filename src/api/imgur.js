import qs from 'qs';
import axios from 'axios';
const CLIENT_ID = '523217ef3cca3cc';
const ROOT_API_URL = 'https://api.imgur.com';

export default {
    login() {
        const queryString = {
            client_id:CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_API_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    async fetchImages(token) {
        return axios.get(`${ROOT_API_URL}/3/account/me/images`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    },
    async getUserAvatar(token,username) {
        return axios.get(`${ROOT_API_URL}/3/account/account/${username}/avatar`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
    },
    async uploadImages(images, token){
        const promises = Array.from(images).map(image => {
            const formData = new FormData();

            formData.append('image', image);

            return axios.post(`${ROOT_API_URL}/3/image`,formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        });

        return Promise.all(promises);


    }
};