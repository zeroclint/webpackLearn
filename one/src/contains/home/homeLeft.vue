<template>
    <div class="home_left_menu">
        <div class="userImg">
            <div class="img">
                <img class="img-circle"  alt="image" />
            </div>
            <div class="userName" v-text="userInfo.userName">xx</div>
            <div class="userDept">
                <span v-text="userInfo.userDept">22</span>
                <span v-text="userInfo.userPost">33</span>
            </div>
        </div>
        <el-menu class="el-menu-vertical-home" :router="true">
            <el-menu-item index="/phoneList">
                <i class="el-icon-tickets"></i>
                <span slot="title">通讯录</span>
            </el-menu-item>
            <el-menu-item index="/email">
                <i class="el-icon-message"></i>
                <span slot="title">邮箱</span>
            </el-menu-item>
            <el-menu-item index="/docment">
                <i class="el-icon-sold-out"></i>
                <span slot="title">我的文档</span>
            </el-menu-item>
            <el-menu-item index="/notebook">
                <i class="el-icon-upload"></i>
                <span slot="title">云笔记</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "home-left",
        data() {
            return {
                userInfo:{
                    userName:'张某某',
                    userImgUrl:'',
                    userDept:'巨洲云',
                    userPost:'管理员',
                },

            };
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    $imgWH: 64px;
    .home_left_menu{
        height:100%;
        border-right:1px solid #e6e6e6;
        .el-menu-vertical-home{
            border-right:none
        }
        .userImg{
            width: 100%;
            height: 160px;
            .img{
                width: $imgWH;
                height: $imgWH;
                margin: 0px auto 10px;
                padding-top: 40px;
                .img-circle{
                    border:1px solid #ccc;
                    width: $imgWH;
                    height: $imgWH;
                    border-radius: 50%;
                }
            }
            .userName{
                text-align: center;
                font-size: 14px;
                color: #303133;
            }
            .userDept{
                text-align: center;
                font-size: 12px;
                color: #999;
                line-height: 20px;
            }
        }
    }
</style>