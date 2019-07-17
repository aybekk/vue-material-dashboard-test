import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/User/UserProfile.vue";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

import AdminMenu from '../pages/Admin/AdminMenu';
import UniversityAdd from '../pages/Admin/University/Add';
import UniversityIndex from '../pages/Admin/University/Index';


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
        path: "profile",
        name: "Профиль пользоавателя",
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
        path: "admin/universities/add",
        name: "Добавление университета",
        component: UniversityAdd,
        meta:{
          requiresAdmin: true,
        }
      },{
        path: "admin/universities",
        name: "Список учебных заведении",
        component: UniversityIndex,
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
