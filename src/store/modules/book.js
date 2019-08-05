import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    books: null,
    book:null,
};

const mutations = {
    storeBooks(state, data) {
        state.books = data;
    },
    storeBook(state, data) {
        state.book = data;
    },

};

const getters = {
    Books(state) {
        return state.books;
    },
    Book(state) {
        return state.book;
    },
};

const actions = {
    store(context, credentials) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('name', credentials.name);
            formData.append('author', credentials.author);
            formData.append('book', credentials.book);
            formData.append('poster', credentials.poster);
            formData.append('year', credentials.year);
            formData.append('language', credentials.language);
            formData.append('subjects[]', credentials.subjects);

            axios.post('books', formData, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                },
                "content-type": "multipart/form-data",
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getList(context) {
        return new Promise((resolve, reject) => {
            axios.get('books/list', {
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
    destroyBook(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.delete('books/'+credentials.id , {
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
            const formData = new FormData();
            formData.append('name', credentials.name);
            formData.append('author', credentials.author);
            formData.append('book', credentials.book);
            formData.append('poster', credentials.poster);
            formData.append('year', credentials.year);
            formData.append('language', credentials.language);
            formData.append('subjects[]', credentials.subjects);
            formData.append('_method', 'PUT');

            axios.post('books/' + credentials.id, formData, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                },
                "content-type": "multipart/form-data",
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getBook(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('books/' + credentials.id, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBook', response.data);
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