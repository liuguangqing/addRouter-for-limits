<template>
  <div id="Homeindex">
    <el-container class="container_parent">
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="4"><div class="grid-content bg-purple" @click="goHome">首页</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">用户 {{fast_token}}</div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple" @click="quite">退出</div></el-col>
        </el-row>
      </el-header>
      <el-container  class="container_child">
        <el-aside width="200px">
          <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <template v-for="(ite, ind) in menudata">
              <el-submenu index="1" v-if='ite.children && ite.children.length > 0'  :key="ind">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ite.name}}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item :index="ite2.path" v-for="(ite2, ind2) in ite.children" :key="ind2">{{ite2.name}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/home/index" v-else  :key="ind">
                <i class="el-icon-menu"></i>
                <span slot="title">/home/index</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>底部</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({})
export default class App extends Vue {
  public fast_token: any = sessionStorage.getItem('token')
  @State('menudata') menudata: any

  handleOpen(key: any, keyPath?: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath?: any) {
    console.log(key, keyPath);
  }
  goHome(): void {
    this.$router.push('/')
  }
  quite(): void {
    sessionStorage.setItem('username', '') // 清除用户信息
    localStorage.setItem('menudata', '') // 清除菜单数据
    window.location.href = '/login'  // 登录重新刷新 动态路由
  }
  mounted() {
   console.log('state >>> menudata', this.menudata) 
  }
}
</script>
<style lang="less">
#app,html,body {
  height: 100%;
}
.container_parent {
  height: 100%;
}
.container_child {
  height: 80%;
}
#Homeindex {
  height: 100%;
}

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
