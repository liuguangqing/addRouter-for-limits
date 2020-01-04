<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang=ts>
import {Component, Vue, Watch} from 'vue-property-decorator';
import ax from '@/service/axios';

@Component({})
export default class about extends Vue {
  initData() {
    // ax({url: '/login', method: 'post', data: {a: 123}}).then(res => {
    //   console.log(res)
    // })
  }
  mounted() {
    this.initData()
  }
}
</script>