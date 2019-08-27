import env from '../../config/env.js';
import axios from 'axios';

axios.defaults.baseURL = env.backendApiUrl;

const state = {
    bookmarks: null,

};

const mutations = {
    storeBookmarks(state, data) {
        state.bookmarks = data;
    },



};

const getters = {
    Bookmarks(state) {
        return state.bookmarks;
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