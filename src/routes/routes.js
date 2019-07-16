import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

import AdminMenu from '../pages/Admin/AdminMenu';

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/books",
    children: [
      {
        path: "books",
        name: "Books",
        component: Dashboard,
        meta:{
          requiresAuth: true,
        }
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
        meta:{
          requiresAuth: true,
        }
      },
      {
        path: "admin",
        name: "Администрирование",
        component: AdminMenu,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "login",
        name: "Войти",
        component: Login,
        meta:{
          requiresVisitor: true,
        }
      },
      {
        path: "logout",
        name: "Выйти",
        component: Logout
      },
      {
        path: "register",
        name: "Регистрация",
        component: Register,
        meta:{
          requiresVisitor: true,
        }
      },
    ]
  }
];

export default routes;
