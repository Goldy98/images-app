import { router } from '../../main';
import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: window.localStorage.getItem('imgur_token'),
    username: window.localStorage.getItem('imgur_username'),
    avatar: window.localStorage.getItem('imgur_avatar')
};

const getters = {
    isLoggedIn: state => !!(state.token),
    username: state => state.username,
    avatar: state => state.avatar
};

const actions  = {
    logIn: () => {
      api.login();
    },
    async finalizeLogin ({ commit }, hash) {
        const hashObject =  qs.parse(hash.replace('#',''));
        window.localStorage.setItem('imgur_token',hashObject.access_token);
        window.localStorage.setItem('imgur_username',hashObject.account_username);
        commit('setToken',hashObject.access_token);
        commit('setUsername',hashObject.account_username);
        const response = await api.getUserAvatar(hashObject.access_token,hashObject.account_username);
        window.localStorage.setItem('imgur_avatar',response.data.data.avatar);
        commit('setUserAvatar',response.data.data.avatar);
        router.push('/');
    },
    logOut: ({ commit }) => {
        commit('setToken',null);
        commit('setUsername',null);
        window.localStorage.removeItem('imgur_token');
        window.localStorage.removeItem('imgur_username');
    }
};

const mutations = {
    setToken: (state,token) => {
        state.token = token
    },
    setUsername: (state, username) => {
        state.username = username
    },
    setUserAvatar: (state, avatar) => {
        state.avatar = avatar
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};