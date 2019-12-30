<template>
  <div>
    <div class="aside">
      <p>用户支付中心</p>
      <el-menu :unique-opened="true" :router="true">
        <el-submenu index="1">
          <template slot="title">
            <span>调研答卷</span>
          </template>
          <el-menu-item index="NewQuestionnaire">新建调研答卷</el-menu-item>
          <el-menu-item index="users">草稿箱</el-menu-item>
          <el-menu-item index="users">已录调研答卷</el-menu-item>
          <el-menu-item index="AnswerManage">调研答卷管理</el-menu-item>
        </el-submenu>
        <!-- 2 -->
        <el-submenu index="2">
          <template slot="title">
            <span>问卷配置</span>
          </template>
          <el-menu-item index="1-1">调研问卷配置</el-menu-item>
          <el-menu-item index="1-2">字典配置</el-menu-item>
          <el-menu-item index="1-2">调研组成员配置</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main" >
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.aside {
  position: absolute;
  left: 0;
  width: 200px;
  height: 100%;
  /* background-color: pink; */
  p {
    background-color: rgba(238, 238, 238, 0.98);
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
}
.main {
  position: absolute;
  left: 200px;
  padding: 20px;
}
</style>