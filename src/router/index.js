import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import auth from './middleware/auth';

Vue.use(VueRouter)

const routes = [
  // public
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
     layout: 'auth-layout'
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "privacy-policy" */ '@/views/PrivacyPolicy.vue')
  },
  // private
  {
    path: '/crm',
    name: 'Crm',
    component: () => import(/* webpackChunkName: "crm" */ '@/views/Crm.vue'),
    meta: { middleware: [auth] },
  },
  {
    path: '/crm/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
    meta: { middleware: [auth] },
  },
  {
    path: '/crm/orders',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "orders" */ '@/views/Orders.vue'),
    meta: { middleware: [auth] },
  },
  {
    path: '/crm/orders/:id',
    name: 'OrderItem',
    component: () => import(/* webpackChunkName: "order-item" */ '@/views/OrderItem.vue'),
    meta: { middleware: [auth] },
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "order-item" */ '@/views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/') {
    await router.push({name: 'Crm'});
  }

  try {
    if (to.meta.middleware && to.meta.middleware.length) {
      to.meta.middleware.forEach(middleware => middleware());
    }
    await next();
  } catch (e) {
    console.warn(e);
    await router.push(e);
  }
});

export default router
