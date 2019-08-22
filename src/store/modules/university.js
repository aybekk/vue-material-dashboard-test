import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    universities: null,
    university: null,
    ips:null,
    books:null,
    books_array:null,
    active_universities:null,
};

const mutations = {
    storeUniversities(state, data) {
        state.universities = data;
    },
    storeActiveUniversities(state, data) {
        state.active_universities = data;
    },
    storeUniversity(state, data) {
        state.university = data;
    },
    storeIps(state, data) {
        state.ips = data;
    },
    storeBooks(state, data) {
        state.books = data;
    },
    storeBooksArray(state, data) {
        state.books_array = data;
    },
    activateUniversity(state, id) {
        let index = state.universities.findIndex(item => item.id === id);
        state.universities[index].activated = 1;
    },
    deactivateUniversity(state, id) {
        let index = state.universities.findIndex(item => item.id === id);
        state.universities[index].activated = 0;
    }
};

const getters = {
    Universities(state) {
        return state.universities;
    },
    ActiveUniversities(state) {
        return state.active_universities;
    },
    University(state) {
        return state.university;
    },
    Ips(state) {
        return state.ips;
    },
    Books(state) {
        return state.books;
    },
    BooksArray(state) {
        return state.books_array;
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
    update(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.put('universities/' + credentials.id, {
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
    getActiveUniversities(context){
        return new Promise((resolve, reject) => {
            axios.get('universities/active', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeActiveUniversities', response.data);
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
    storeBooks(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('universities/' + credentials.id + '/books', {
                books: credentials.books
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
    getBooks(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('universities/' + credentials.id + '/books', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBooks', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getBooksArray(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('universities/' + credentials.id + '/books/array', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBooksArray', response.data);
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
    activate(context,credentials){
        return new Promise((resolve, reject) => {
            axios.put('universities/' +  credentials.id + '/activate', {

            }, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('activateUniversity', credentials.id);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    deactivate(context,credentials){
        return new Promise((resolve, reject) => {
            axios.put('universities/' +  credentials.id + '/deactivate', {

            }, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('deactivateUniversity', credentials.id);
                resolve(response);
            }).catch(error => {
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