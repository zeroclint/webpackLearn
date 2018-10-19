
import Vue from 'vue';
// import firstvue from './firstvue.vue'
import router from './router'
import mainApp from './App.vue'
// import store from './vuex/store'
/******注册elementui组件**************/
import 'element-ui/lib/theme-chalk/index.css'
import {Row , Col,Menu,MenuItem,Submenu,Button,ButtonGroup,Input,Select,Option,OptionGroup,Table,TableColumn,Progress,Pagination,Dialog,Form,FormItem,
    TimePicker,TimeSelect,DatePicker,Tooltip,Upload,Dropdown,DropdownMenu,DropdownItem,Message,Alert} from  'element-ui'
const eleui={Row,Col,Menu,MenuItem,Submenu,Button,ButtonGroup,Input,Select,Option,OptionGroup,Table,TableColumn,Progress,Pagination,Dialog,Form,FormItem,
    TimePicker,TimeSelect,DatePicker,Tooltip,Upload,Dropdown,DropdownMenu,DropdownItem,Message,Alert}
Object.keys(eleui).forEach(function (key) {
    // Vue.use(Row);
    // Vue.use(Col);
    Vue.component(key, eleui[key])
    Vue.component(`el${key}`, eleui[key])
})
/*************elementUI国际化*********************************************************/
// import emementUILocale from './locale/elementUI.locale'

/*************注入一个全局对象****************/
// import service from './services/service'
// Vue.prototype.jzyService=service;  //注入一个全局对象，让组件的任何地方都可以使用jzyService对象的属性和方法

//注册一个全局弹出动画组件
// import rightSlideModal from './components/commonComponent/rightSlideModal.vue'
// Vue.component('rightSlideModal',rightSlideModal);
//引入UEditor富客户端编辑工具
// import '../static/utf8-php/ueditor.config.js'
// import '../static/utf8-php/ueditor.all.min.js'
// import '../static/utf8-php/lang/zh-cn/zh-cn.js'
// import '../static/utf8-php/ueditor.parse.min.js'
// Vue.component('UEditor',UEditor)
/*************国际化****************/
// import VueI18n from './locale/locale'

/*************引用自定义指令****************/
// import inputMoneyFormat from  './directives/inputMoneyFormat'
// Vue.use(inputMoneyFormat)
/*************引用自定义过滤****************/
// import   './filters/filters'


new Vue({
    el: '#app',
    router,
    // i18n:VueI18n,
    components: {
        mainApp
    },
    template:'<mainApp/>'
});
// var sendAjax = function(obj) {
//   // 发送请求
//   alert("kkkk")
// };
// var debounce = function() {
//   var wait = 2500;
//   var timeout;
//   return function () {
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(sendAjax, wait);
//   }
// };
// debugger
// debounce();
// debounce();
// function debounce(fn, waitTime, context) {
//     var timeId = null;
//
//     return function() {
//         clearTimeout(timeId);
//
//         timeId = setTimeout(fn.bind(context), waitTime);
//     };
// }
// var self = this;
// window.addEventListener('resize', debounce(function () {
//     console.log("kdkdk")
// }, 1000, self));
