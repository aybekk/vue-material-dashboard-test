import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    bookmarks_array: null,
    bookmarks:null,
};

const mutations = {
    storeBookmarksArray(state, data) {
        state.bookmarks_array = data;
    },
    storeBookmarks(state, data) {
        state.bookmarks = data;
    },



};

const getters = {
    BookmarksArray(state) {
        return state.bookmarks_array;
    },
    Bookmarks(state) {
        return state.bookmarks;
    },
    PageItems(state) {
        if(state.bookmarks) {
            return state.bookmarks.data;
        }
    },
    LastPage(state) {
        if(state.bookmarks) {
            return state.bookmarks.last_page;
        }
    },
};

const actions = {
    getList(context) {
        return new Promise((resolve, reject) => {
            axios.get('bookmarks/list', {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBookmarksArray', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },
    getBookmarksPage(context,credentials) {
        return new Promise((resolve, reject,) => {
            axios.get('bookmarks?page=' + credentials.page, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + context.rootState.auth.token,
                }
            }).then(response => {
                context.commit('storeBookmarks', response.data);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    },

    addBookmark(context,credentials){
        return new Promise((resolve, reject) => {
            axios.put('bookmarks/' +  credentials.id , {

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
    removeBookmark(context,credentials){
        return new Promise((resolve, reject) => {
            axios.delete ('bookmarks/' +  credentials.id , {
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

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};