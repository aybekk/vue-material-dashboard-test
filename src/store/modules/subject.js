import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    subjects: null,

};

const mutations = {
    storeSubjects(state, data) {
        state.subjects = data;
    },

};

const getters = {
    Subjects(state) {
        return state.subjects;
    },

};

const actions = {
    store(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('subjects', {
                name: credentials.name,
                category: credentials.category,
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
            axios.get('subjects', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeSubjects', response.data);
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