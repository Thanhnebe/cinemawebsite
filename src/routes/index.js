import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout/Layout";
import Details from "../pages/Movie/Details";
//Layout không cần đăng nhập cũng xem được
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: '/login',
    component: Login,
    layout: null
  },
  {
    path: '/deltail',
    component: Details,
  }
];
//Layout cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
