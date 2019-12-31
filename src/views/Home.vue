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
.main {
  position: absolute;
  left: 200px;
  // width: 80%;
  // min-width: 100%;
  padding: 20px;
  top: 60px;
  right: 40px;
}
</style>