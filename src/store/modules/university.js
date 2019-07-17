import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    universities: null
};

const mutations = {
    storeUniversities(state, data) {
        state.universities = data;
    }
};

const getters = {
    Universities(state) {
        return state.universities;
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

};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};