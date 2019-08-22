import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    admins: null,
    users: null,
    user: null,
};

const mutations = {
    storeAdmins(state, data) {
        state.admins = data;
    },
    storeUsers(state, data) {
        state.users = data;
    },

    storeUser(state, data) {
        state.user = data;
    },
};

const getters = {
    Admins(state) {
        return state.admins;
    },
    Users(state) {
        return state.users;
    },

    User() {
        return state.user;
    }
};

const actions = {
    store(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('users/store-admin', {
                name: credentials.name,
                second_name: credentials.second_name,
                email:credentials.email,
            }, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },


    storeUser(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('users', {
                name: credentials.name,
                second_name: credentials.second_name,
                email:credentials.email,
                group:credentials.group,
                university_id:credentials.university_id,
            }, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getUser(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('users/' + credentials.id, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeUser', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getAdmins(context) {
        return new Promise((resolve, reject) => {
            axios.get('users/admins', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeAdmins', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getUsers(context) {
        return new Promise((resolve, reject) => {
            axios.get('users/not-admins', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeUsers', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    destroyUser(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.delete('users/'+credentials.id , {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },


};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};