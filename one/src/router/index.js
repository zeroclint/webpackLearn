import Vue from 'vue'
import VueRouter from 'vue-router'

// import task from '../contains/task/task.vue'
// import ehr from '../contains/ehr/ehr.vue'
// import email from '../contains/email/email.vue'
// import emailContent from '../contains/email/email.content.vue'
// import emailSetting from '../contains/email/email.setting.vue'
// import vuexFirst from '../contains/vuexTest/vuex.first.vue'
// import directiveMain from '../contains/directive/directiveMain'
// import directiveUseCustomInput from '../contains/directive/useCustomInput'
let home = r => require.ensure([], () => r(require('../contains/home/homeMain.vue')), 'home')
let task = r => require.ensure([], () => r(require('../contains/task/task.vue')), 'task')
let news = r => require.ensure([], () => r(require('../contains/news/news.vue')), 'news')
Vue.use(VueRouter);

// const home = { template: '<div>home</div>' }
// const news = { template: '<div>news</div>' }
// const approve = { template: '<div>approve</div>' }
const routes=[
  {path: '/', component: home},
   {path: '/news', component: news},
  // {path: '/news', component: news},
  // {path: '/approve', component: approve},
  //任务
  {path: '/task', name:'task', component: task},
  // {path: '/ehr', name:'ehr', component: ehr},
  //email
  // { path: '/email',
  //   name:'email',
  //   component: email,
  //   children:[
  //     {path: 'inbox/:eid', component: emailContent},
  //     {path: 'outbox/:eid', component: emailContent},
  //     {path: 'stars/:eid', component: emailContent},
  //     {path: 'drafts/:eid', component: emailContent},
  //     {path: 'deleted/:eid', component: emailContent},
  //     {path: 'junk/:eid', component: emailContent},
  //     ]
  // },
  // {path: '/email/setting', component: emailSetting},
  // //vuex
  // {path: '/vuex/first', name:'vuexFirst', component: vuexFirst},
  //
  // {path: '/directive/main', name:'directiveMain', component: directiveMain},
  // {path: '/directive/customInput', name:'directiveCustomInput', component: directiveUseCustomInput}
]
const router =  new VueRouter({
  model:'history',
  routes
})
export default router;
