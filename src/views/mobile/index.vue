<template>
  <div class="mo_contain">
    <div class="mo_title" @click="$router.push('/')">移动端欢迎页</div>
    <div>
      <el-carousel :interval="4000" type="card" >
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
.mo_contain {
  .mo_title {
    width: 750px;
    line-height: 100px;
    background-color: red;
  }



  .el-carousel__container {
    height: 260px ;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 260px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-button.is-circle {
    padding: 40px ;
  }
}
</style>