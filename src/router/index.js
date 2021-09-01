import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../views/home/Home.vue')
const Car = () => import('../views/car/Car.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component:Home
    },
    {
      path: '/car',
      component:Car
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/profile',
      component:Profile
    }
  ]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router