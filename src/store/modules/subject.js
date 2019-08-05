import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    subjects: null,
    subject: null,
    books:null,
    books_array: null,

};

const mutations = {
    storeSubjects(state, data) {
        state.subjects = data;
    },
    storeSubject(state, data) {
        state.subject = data;
    },
    storeBooks(state, data) {
        state.books = data;
    },
    storeBooksArray(state, data) {
        state.books_array= data;
    },
};

const getters = {
    Subjects(state) {
        return state.subjects;
    },
    Subject(state) {
        return state.subject;
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
    getBooks(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('subjects/' + credentials.id + '/books', {
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
            axios.get('subjects/' + credentials.id + '/books/array', {
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

    getSubject(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('subjects/' + credentials.id, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeSubject', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    storeBooks(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('subjects/' + credentials.id + '/books', {
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
    destroyDiscipline(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.delete('subjects/'+credentials.id , {
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
            axios.put('subjects/' + credentials.id, {
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





};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};