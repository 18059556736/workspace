import Vue from 'vue'
import VueRouter from 'vue-router'
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
      {name:'questionnairemodel',path:'/QuestionnaireModel',component:()=>import('../views/NewQuestionnaire/QuestionnaireModel.vue')},
      {name:'Drafts',path:'/Drafts',component:()=>import('../views/Drafts/Drafts.vue')},
      {name:'Entered',path:'/Entered',component:()=>import('../views/Entered/Entered.vue')},
      {name:'AnswerConfiguration',path:'/AnswerConfiguration',component:()=>import('../views/AnswerConfiguration/AnswerConfiguration.vue')},
      {name:'Dictionary',path:'/Dictionary',component:()=>import("../views/Dictionary/Dictionary.vue")},
      {name:'Members',path:'/Members',component:()=>import('../views/Members/Members.vue')},
      {name:'NewConfiguration',path:'/NewConfiguration',component:()=>import('../views/AnswerConfiguration/NewConfiguration.vue')}
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
