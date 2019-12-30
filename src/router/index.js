import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/notfound', // 没有对应的页面
    name: '404',
    component: ()=>import('../views/404.vue'),
    meta: {
      authConfig: {
        noLogin: true
      }
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {name:'answermanage',path:'/AnswerManage',component:()=>import('../views/AnswerManage/AnswerManage.vue')},
      {name:'answerdetail',path:'/AnswerDetail',component:()=>import('../views/AnswerManage/AnswerDetail.vue')},
      {name:'newquestionnaire',path:'/NewQuestionnaire',component:()=>import('../views/NewQuestionnaire/NewQuestionnaire.vue')},
    ]
  },
  {
    path: '/', // 未知路由，统一导航到404页
    redirect: '/AnswerManage'
  },
  {
    path: '*', // 未知路由，统一导航到404页
    redirect: '/notfound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
