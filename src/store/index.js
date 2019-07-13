import Vue from 'vue';
import Vuex from 'vuex';
import env from '../config/env.js';
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = env.backendApiUrl;

export default  new Vuex.Store({
    state : {
        token: localStorage.getItem('access_token') || null,
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token;
        },
        removeToken(state) {
            state.token = null;
        }
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        }
    },
    actions:{
        retrieveToken(context,credentials) {
            return new Promise((resolve, reject) => {
                axios.post('login', {
                    grant_type: 'password',
                    client_secret: env.clientSecret,
                    client_id: 2,
                    email: credentials.email,
                    password: credentials.password,
                }, {
                    Accept: 'application/json',
                }).then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('access_token', token);
                    context.commit('retrieveToken', token);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },

        registerAndRetrieveToken(context,credentials) {
            return new Promise((resolve, reject) => {
                axios.post('register', {
                    grant_type: 'password',
                    client_secret: env.clientSecret,
                    client_id: 2,
                    email: credentials.email,
                    password: credentials.password,
                    name: credentials.name,
                }, {
                    Accept: 'application/json',
                }).then(response => {
                    const token = response.data.access_token;
                    localStorage.setItem('access_token', token);
                    context.commit('retrieveToken', token);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },


        destroyToken(context) {
            if(context.getters.loggedIn){
                localStorage.removeItem('access_token');
                context.commit('removeToken');
            }
            return true;
        },
    }
});