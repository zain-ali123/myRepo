import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RegisterView from '../views/RegisterView.vue'
import ToDoView from '../views/ToDoView.vue'
import MyView from '../views/myListView.vue'
import addtodo from '../components/addToTodo.vue'
  
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/todo',
    name: 'todo',
    component: ToDoView,

  },
  {
    path: '/mylist',
    name: 'mylist',
    component: MyView,
    children: [
      {
    path: '/addTodo',
    name: 'addTodo',
    component: addtodo,
  },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
