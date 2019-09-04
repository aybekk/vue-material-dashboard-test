import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    books: null,
    book:null,
    book_subjects:null,
    book_pages: null,
    latest:null,
};

const mutations = {
    storeBooks(state, data) {
        state.books = data;
    },
    storeBookSubjects(state, data) {
        state.book_subjects = data;
    },
    storeBook(state, data) {
        state.book = data;
    },
    storePage(state, data) {
        state.book_pages = data;
    },
    storeLatest(state, data) {
        state.latest = data;
    },

};

const getters = {
    Books(state) {
        return state.books;
    },
    BookSubjects(state) {
        return state.book_subjects;
    },
    Book(state) {
        return state.book;
    },
    PageItems(state) {
        if(state.book_pages) {
            return state.book_pages.data;
        }
    },
    LastPage(state) {
        if(state.book_pages) {
            return state.book_pages.last_page;
        }
    },
    Total(state) {
        if(state.book_pages) {
            return state.book_pages.total;
        }
    },
    PageLatest(state) {
        if(state.latest) {
            return state.latest.data;
        }
    },
    LastPageLatest(state) {
        if(state.latest) {
            return state.latest.last_page;
        }
    },
    TotalLatest(state) {
        if(state.book_pages) {
            return state.latest.total;
        }
    },


};

const actions = {
    getPage(context, credentials) {
        const page = credentials.page;
        return new Promise((resolve, reject) => {
            axios.get('books?page=' + page, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storePage', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getLatest(context, credentials) {
        const page = credentials.page;
        return new Promise((resolve, reject) => {
            axios.get('books/latest?page=' + page, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeLatest', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    search(context,credentials){
        var language = credentials.language

        return new Promise((resolve, reject) => {
            axios.get('books/search', {
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

    store(context, credentials) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('name', credentials.name);
            formData.append('author', credentials.author);
            formData.append('book', credentials.book);
            formData.append('poster', credentials.poster);
            formData.append('year', credentials.year);
            formData.append('language', credentials.language);
            credentials.subjects.forEach(function (item) {
                formData.append('subjects[]', item);
            });

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
    getBookSubjects(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.get('books/' + credentials.id +'/subjects', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBookSubjects', response.data);
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
            credentials.subjects.forEach(function (item) {
                formData.append('subjects[]', item);
            });

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