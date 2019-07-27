import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/User/UserProfile.vue";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

import AdminMenu from '../pages/Admin/AdminMenu';

import UniversityAdd from '../pages/Admin/University/Add';
import UniversityEdit from '../pages/Admin/University/Edit';
import UniversityIndex from '../pages/Admin/University/Index';
import UniversityIp from '../pages/Admin/University/Ip';
import UniversityAddIp from '../pages/Admin/University/AddIp';

import SubjectIndex from '../pages/Admin/Subject/Index';
import SubjectAdd from '../pages/Admin/Subject/Add';

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
      },
      {
        path: "admin/universities/:id/edit",
        name: "Редактировать учебное заведение",
        component: UniversityEdit,
        meta:{
          requiresAdmin: true,
        }
      },

      {
        path: "admin/universities",
        name: "Список учебных заведении",
        component: UniversityIndex,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/universities/:id/ip-addresses",
        name: "Добавление IP адреса",
        component: UniversityIp,
        meta:{
          requiresAdmin: true,
        }
      },
        {
        path: "admin/universities/:id/ip-addresses/add",
        name: "Список IP адресов учебного заведения",
        component: UniversityAddIp,
        meta:{
          requiresAdmin: true,
        }
      },


      {
        path: "admin/subjects",
        name: "Список дисциплин",
        component: SubjectIndex,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/subjects/add",
        name: "Добавление дисциплины",
        component: SubjectAdd,
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
