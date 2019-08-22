import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/User/UserProfile.vue";

import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

import AdminMenu from '../pages/Admin/AdminMenu';
import BooksIndex from '../pages/Books/Index';
import BookmarksIndex from '../pages/Bookmarks/Index';
import ArticlesIndex from '../pages/Articles/Index';
import StoryIndex from '../pages/Story/Index';

import UniversityAdd from '../pages/Admin/University/Add';
import UniversityEdit from '../pages/Admin/University/Edit';
import UniversityIndex from '../pages/Admin/University/Index';
import UniversityIp from '../pages/Admin/University/Ip';
import UniversityAddIp from '../pages/Admin/University/AddIp';
import UniversityBooks from '../pages/Admin/University/Book/ActiveBooks';
import UniversityBookEdit from '../pages/Admin/University/Book/Edit';

import SubjectIndex from '../pages/Admin/Subject/Index';
import SubjectAdd from '../pages/Admin/Subject/Add';
import SubjectEdit from '../pages/Admin/Subject/Edit';
import SubjectBooks from '../pages/Admin/Subject/Book/ActiveBooks';
import SubjectBookEdit from '../pages/Admin/Subject/Book/Edit';

import BookAdd from '../pages/Admin/Book/Add';
import BookIndex from '../pages/Admin/Book/Index';
import BookEdit from '../pages/Admin/Book/Edit';

import UserIndex from '../pages/Admin/User/Index';
import UserEditAdmin from '../pages/Admin/User/EditAdmin';
import UserEditUser from '../pages/Admin/User/EditUser';
import UserAddUser from '../pages/Admin/User/AddUser';
import UserAddAdmin from '../pages/Admin/User/AddAdmin';





const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/books",
    children: [
      {
        path: "books/:page",
        name: "Books",
        component: BooksIndex,
        meta:{
          requiresAuth: true,
        }
      },
      {
        path: "bookmarks",
        name: "Bookmarks",
        component: BookmarksIndex,
        meta:{
          requiresAuth: true,
        }
      },
      {
        path: "articles",
        name: "Articles",
        component: ArticlesIndex,
        meta:{
          requiresAuth: true,
        }
      },
      {
        path: "story",
        name: "Story",
        component: StoryIndex,
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
        path: "admin/universities/:id/books",
        name: "Книга унтверситета",
        component: UniversityBooks,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/universities/:id/books/edit",
        name: "Редактирование книг университета ",
        component: UniversityBookEdit,
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
        path: "admin/subjects/:id/edit",
        name: "Редактировать Дисциплины",
        component: SubjectEdit,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/subjects/:id/books",
        name: "Книги дисциплины",
        component: SubjectBooks,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/subjects/:id/books/edit",
        name: "Редактирование книги дисциплины ",
        component: SubjectBookEdit,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/books",
        name: "Список книг",
        component: BookIndex,
        meta:{
          requiresAdmin: true,
        }
      },



      {
        path: "admin/books/add",
        name: "Добавить книгу",
        component: BookAdd,
        meta:{
          requiresAdmin: true,
        }
      },


      {
        path: "admin/books/:id/edit",
        name: "Редактировать книгу",
        component: BookEdit,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/users",
        name: "Список пользователей",
        component: UserIndex,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/users/admin/:id/edit",
        name: "Редактирование администратора ",
        component: UserEditAdmin,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/users/:id/edit",
        name: "Редактирование пользователя",
        component: UserEditUser,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/users/admin/add",
        name: "Добавление администратора",
        component: UserAddAdmin,
        meta:{
          requiresAdmin: true,
        }
      },
      {
        path: "admin/users/user/add",
        name: "Добавление пользователя",
        component: UserAddUser,
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
