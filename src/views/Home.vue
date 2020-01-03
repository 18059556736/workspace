<template>
  <div>
    <Aside></Aside>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Aside from "../components/Aside/Aside";
export default {
  components: {
    Aside
  }
};
</script>
<style lang="scss">
.navMenu{
  background-color: #f5f5f5;
  height: 40px;
  // font-size: 16px;
  // line-height: 40px;
  padding-left: 20px;
}
// .table {
//   padding-left: 30px;
//   padding-right: 30px;
// }
.main-content{
  padding-left: 20px;
  padding-right: 20px;
}
.main {
  position: absolute;
  left: 200px;
  top: 60px;
  right: 0px;
}
.el-button {
  padding: 8px 8px;
}
.el-breadcrumb{
  line-height: 40px;
}
</style>