import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth/:mode',
      name: 'auth',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Auth.vue'),
    },
    {
      path: '/item-detail/:id',
      name: 'item-detail',
      component: () => import(/* webpackChunkName: "about" */ './views/ItemDetail.vue'),
    },
    {
      path: '/items',
      name: 'items',
      component: () => import(/* webpackChunkName: "about" */ './views/Items.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./views/Favorites.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/DashBoard.vue'),
      children: [
        {
          path: 'pswd-update',
          name: 'paswd-change',
          component: () => import('./components/PasswordUpdate.vue'),
        },
        {
          path: 'personal-info',
          name: 'personal-info',
          component: () => import('./components/PersonInfo.vue'),
        },
      ],
    },
  ],
});
