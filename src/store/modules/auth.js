import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    token: localStorage.getItem('access_token') || null,
    group: localStorage.getItem('group') || null,
    user: null,
};

const mutations = {
    retrieveToken(state, data) {
        state.token = data.access_token;
        state.group = data.user.group;
        state.user = data.user;
    },
    removeToken(state) {
        state.token = null;
        state.group = null;
        state.user = null;
    },
    setUserInfo(state, data) {
        state.group = data.group;
        state.user = data;
    }
};

const getters = {
    loggedIn(state) {
        return state.token !== null;
    },
    isAdmin(state) {
        return state.group === 'admin';
    },
    userGroup(state) {
        return state.group;
    },
    userInfo(state) {
        return state.user;
    }
};

const actions = {
    retrieveToken(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('login', {
                grant_type: 'password',
                client_secret: env.clientSecret,
                client_id: 2,
                email: credentials.email,
                password: credentials.password,
            }, {
                headers: {
                    Accept: 'application/json',
                }
            }).then(response => {
                const token = response.data.access_token;
                const data = response.data;
                localStorage.setItem('access_token', token);
                localStorage.setItem('group', data.user.group);
                context.commit('retrieveToken', data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    registerAndRetrieveToken(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('register', {
                grant_type: 'password',
                client_secret: env.clientSecret,
                client_id: 2,
                email: credentials.email,
                password: credentials.password,
                name: credentials.name,
                second_name: credentials.second_name,
            }, {
                headers: {
                    Accept: 'application/json',
                }
            }).then(response => {
                const token = response.data.access_token;
                const data = response.data;
                localStorage.setItem('access_token', token);
                localStorage.setItem('group', data.user.group);
                context.commit('retrieveToken', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },


    destroyToken(context) {
        if (context.getters.loggedIn) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('group');
            context.commit('removeToken');
        }
        return true;
    },

    getUserInfo(context) {
        return new Promise((resolve, reject) => {
            axios.get('profile', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + state.token,
                }
            }).then(response => {
                const data = response.data;
                localStorage.setItem('group', data.group);
                context.commit('setUserInfo', response.data);
                resolve(response);
            }).catch(error => {
                this.dispatch('auth/destroyToken');
                reject(error);
            });
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};