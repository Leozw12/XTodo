<template>
    <div id="app">
        <el-container style="height: 100%; border: 1px solid #eee;">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
                <el-menu router>
                    <el-menu-item index="/list">
                        <i class="el-icon-menu"></i>
                        <span slot="title">待办列表</span>
                    </el-menu-item>
                    <el-menu-item index="/add">
                        <i class="el-icon-circle-plus-outline"></i>
                        <span slot="title">添加待办</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {mapActions} from "vuex"
    export default {
        name: 'App',
        components: {},
        methods: {
            ...mapActions(["initList"])
        },
        created() {
            this.initList()
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    #app {
        height: 100%;
    }
/*    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    } */
</style>
