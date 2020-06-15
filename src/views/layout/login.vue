<template>
  <div class="login_box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row type="flex" justify="center">
        <el-col :span="7">
          <el-form-item label="登录用户">
            <el-input v-model="form.name" @change="saveVal" placeholder="please enter front or admin"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7">
          <el-form-item label="登录密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="7">
          <el-button type="success" size="medium" @click="saveVal">立即登录</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import { Action, State, Mutation } from 'vuex-class'

@Component({})
export default class login extends Vue {
  
  form: any = {name: ''}
  @State('token') token: any
  @Mutation('set_Token') set_Token: any
  @Mutation('set_remoteRouteRefresh') set_remoteRouteRefresh: any

  saveVal (): void {
    this.set_Token(this.form.name)
    this.set_remoteRouteRefresh(true)
    console.log('this.token', this.token)
    sessionStorage.setItem('username', this.form.name)
    setTimeout(() => {
      this.$router.push({path: '/'})
    }, 1000);
  }
  mounted() {
    console.log('this.token', this.token)
  }
}
</script>
<style lang="less" scoped>
  .login_box {
    height: 100%;
    padding-top: 200px;
    // background: url(../../assets/img/login_bg.png) no-repeat center center;
    background-image:  radial-gradient(circle  farthest-side at 50% 100%, #F4F60C 0, #bfbbf7 67%);
  }
</style>
