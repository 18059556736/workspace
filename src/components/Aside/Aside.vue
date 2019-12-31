<template>
  <div class="aside">
    <p>用户支付中心</p>
    <el-menu :unique-opened="true" :router="true" :default-openeds='["1","2"]'>
      <el-submenu index="1">
        <template slot="title">
          <span>调研答卷</span>
        </template>
        <el-menu-item index="NewQuestionnaire">新建调研答卷</el-menu-item>
        <el-menu-item index="Drafts">草稿箱</el-menu-item>
        <el-menu-item index="Entered">已录调研答卷</el-menu-item>
        <el-menu-item index="AnswerManage">调研答卷管理</el-menu-item>
      </el-submenu>
      <!-- 2 -->
      <el-submenu index="2">
        <template slot="title">
          <span>问卷配置</span>
        </template>
        <el-menu-item index="AnswerConfiguration">调研问卷配置</el-menu-item>
        <el-menu-item index="Dictionary">字典配置</el-menu-item>
        <el-menu-item index="Members">调研组成员配置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.aside {
  position: absolute;
  left: 0;
  width: 200px;
  top: 60px;
  /* background-color: pink; */
  background-color: rgba(238, 238, 238, 0.98);
  p {
    background-color: rgba(238, 238, 238, 0.98);
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
  }
}
</style>