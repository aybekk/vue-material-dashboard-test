import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    universities: null,
    university: null,
    ips:null,
};

const mutations = {
    storeUniversities(state, data) {
        state.universities = data;
    },
    storeUniversity(state, data) {
        state.university = data;
    },
    storeIps(state, data) {
        state.ips = data;
    }
};

const getters = {
    Universities(state) {
        return state.universities;
    },
    University(state) {
        return state.university;
    },
    Ips(state) {
        return state.ips;
    }
};

const actions = {
    store(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('universities', {
                name: credentials.name,
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

    getList(context) {
        return new Promise((resolve, reject) => {
            axios.get('universities', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeUniversities', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    getUniversity(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('universities/' + credentials.id, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeUniversity', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    storeIp(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('universities/' + credentials.id + '/ip-addresses', {
                ip_start: credentials.ip_start,
                ip_end: credentials.ip_end,
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
    getIps(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('universities/' + credentials.id + '/ip-addresses', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeIps', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    destroyIp(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.delete('universities/' + credentials.university_id + '/ip-addresses/'+credentials.id, {
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