<template>
  <div class="main">
    <!--<mainMenu @mycustom="changeurl"></mainMenu>-->
    <div class="maincontain">
      <div class="mainleft">
        <!--<homeleft v-if="jzyService.getPathName()=='/'"></homeleft>-->
        <!--<taskMenu v-if="jzyService.getPathName().startsWith('/task')"></taskMenu>-->
        <!--<emailMenu v-if="jzyService.getPathName().startsWith('/email')"></emailMenu>-->
        <!--&lt;!&ndash;<vuexMenu v-if="jzyService.getPathName().startsWith('/vuex')"></vuexMenu>&ndash;&gt;-->
        <!--<directvieMenu v-if="jzyService.getPathName().startsWith('/directive')"></directvieMenu>-->
      </div>
      <div class="mainright">
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>
    // import mainMenu from './components/mainMenu.vue'
    // import homeleft from './contains/home/homeLeft.vue'
    // import taskMenu from './contains/task/task.menu.vue'
    // import emailMenu from './contains/email/email.menu.vue'
    // import vuexMenu from  './contains/vuexTest/vuex.menu'
    // import directvieMenu from  './contains/directive/directiveTest'
    export default {
        name: "maincontain",
        // data:function () {
        //     return{jzy:jzy}
        // },
        components:{
            // mainMenu:mainMenu,
            // homeleft:homeleft,
            // taskMenu:taskMenu,
            // emailMenu:emailMenu,
            // vuexMenu,
            // directvieMenu
        },
        methods:{
            changeurl:function (url) {
                console.log("mainurl："+url)
                // this.$router.push(url);

            }
        }
    }
</script>

<style  lang="scss">
  @import "./reset.scss";
  body{overflow: hidden}
  .maincontain{
    position:absolute;
    top:60px;
    width: 100%;
    height: 100%;
    .mainleft{
      position: fixed;
      /*position: absolute;  为什么没内容的地方设置的背景无效*/
      left:0px;
      width:16.66667%;
      height: calc(100% -60px);
      background: white;
      bottom:0px;
      top:60px;
      overflow: auto;
    }
    .mainright{
      position: absolute;
      right:0px;
      /*top:5px;*/
      width:83.333%;
      height:100%;
      overflow: auto;
    }

    /*****设置滚动条的样式*************************************/
    /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar{
      width: 10px;
      height: 1px;
      background-color: #f5f5f5;
    }
    /*定义滚动条的轨道，内阴影及圆角*/
    ::-webkit-scrollbar-track{
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      border-radius: 5px;
      background-color: #EDEDED;
    }
    /*定义滑块，内阴影及圆角*/
    ::-webkit-scrollbar-thumb{
      /*width: 10px;*/
      height: 15px;
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #F90;
    }
  }
</style>
