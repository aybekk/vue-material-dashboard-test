import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import university from './modules/university';
import subject from './modules/subject';

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        auth,
        university,
        subject,
    },
});