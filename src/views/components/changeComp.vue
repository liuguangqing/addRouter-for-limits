<template>
  <div>
    组件
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch, Emit} from 'vue-property-decorator';

@Component({})
export default class changeComp extends Vue {
  public VHview: any = '看看'
  render (h: any) {
    return (
      '<div>显示render</div>'
    )
  }
}
</script>