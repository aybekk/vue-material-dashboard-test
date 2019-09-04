import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import university from './modules/university';
import subject from './modules/subject';
import book from './modules/book';
import user from './modules/user';
import bookmarks from './modules/bookmarks';
import articles from './modules/articles';

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        auth,
        university,
        subject,
        book,
        user,
        articles,
        bookmarks,
    },
});