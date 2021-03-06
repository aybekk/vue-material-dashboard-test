// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from'./store/index.js';

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
  mode: "history"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record =>record.meta.requiresAuth)) {
    if(!store.getters['auth/loggedIn']){
      next({path: "/login"});
    }
  } else if(to.matched.some(record =>record.meta.requiresVisitor)) {
    if (store.getters['auth/loggedIn']) {
      next({path: "/books"});
    }
  } else if(to.matched.some(record =>record.meta.requiresAdmin)) {
    if(!store.getters['auth/loggedIn']){
      next({path: "/login"});
    }
    if (store.getters['auth/userGroup'] !== 'admin') {
      next({path: "/books"});
    }
  }

  if(store.getters['auth/loggedIn'] && store.getters['auth/userInfo'] === null) {
    store.dispatch('auth/getUserInfo')
        .catch(error =>{
          next({path: "/login"});
        });
  }

  next();

})
new Vue({
  el: "#app",
  store,
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
