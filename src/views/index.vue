<template>
  <div class="home">
    <img alt="Vue logo" src="/assets/logo.png" @click="changeVal">
    <div>{{initValue}}</div>
    <div>{{Vals}}</div>
    <HelloWorld msg="父组件的值" @parentChange="parentChange"/>
  </div>
</template>

<script lang=ts>
import HelloWorld from "@/components/HelloWorld.vue";
import {Component, Vue, Watch} from 'vue-property-decorator';
import api from '@/service/api';
import { Action, State } from 'vuex-class'

@Component({  // 修饰符 必须实例化
  components: {
    HelloWorld
  }
})
export default class homeIndex extends Vue {
  initValue: any = '哈哈'  // data : public private
  get Vals(): string | number { // computed : get set
    return this.initValue + "   你好"
  }

  @State('selfValue') getSelfValue: any // mapState
  @Action('getHomeUrl')  getHomeUrl: any // mapAction

  @Watch('initValue', {deep: true}) // 监听
  onPersonChanged2(newVal: string, oldVal: string) {
    console.log('监听', newVal, oldVal)
  }

  changeVal (): void {   // methods
    this.initValue = this.initValue == '哈哈' ? '嘻嘻' : '哈哈'
  }
  parentChange(val: string | number): void {
    console.log('触发父组件', val)
  }
   handleOpen(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  handleClose(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
  mounted() {
    console.log('initValue', this.initValue)
    console.log('getSelfValue', this.getSelfValue)
    this.getHomeUrl({
      url: 'params',
      userCode: 'front',
    }).then((res: any) => {
      console.error('真实请求-成功')
    }).catch((err: any) => {
      console.error('真实请求-失败')
    })
  }
}

</script>
