<template>
  <div class="flag_contain">
    <div class="flag_title">测试节流和防抖</div>
    <div>
      <el-row  type="flex"  justify="center">
        <el-col :span="10">
          <el-button type="primary" @click="throttleFn">节流</el-button>
          <div class="flag_render">
            {{count}}
          </div>
          <div class="flag_render">
            render DOM
            <changeComp></changeComp>
          </div>
        </el-col>
        <el-col :span="10">
          <el-button type="success" @click="debounceFn">防抖</el-button>
          <div class="flag_render">
            {{count2}}
          </div>
          <div class="flag_render">render DOM</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import changeComp from './components/changeComp.vue';

@Component({
  components: {changeComp}
})
export default class testFlag extends Vue {
  public count: number = 0
  public count2: number = 0
  private timeout: any = ''
  private timeout2: any = ''
  throttleFn () {
    this.throttle(1000, (er: any) => {
      this.count++
    })
  }
  // 节流
  throttle (wait: number, func: any) {
    if (!this.timeout) {
      func.apply(this, arguments)
      this.timeout = setTimeout(() => {
        this.timeout = null
      }, wait)
    }
  }
  debounceFn () {
    this.debounce(500, () => {
      this.count2++
    })
  }
  // 去抖
  debounce (wait: number, callback: any) {
    if (this.timeout2) clearTimeout(this.timeout2)
    this.timeout2 = setTimeout(() => {
      callback.apply(this, arguments)
      this.timeout2 = null
    }, wait)
  }
}
</script>
<style lang="less">
  .flag_contain {
    line-height: 60px;
    .flag_render {
    line-height: 20px;
    }
  }
</style>
