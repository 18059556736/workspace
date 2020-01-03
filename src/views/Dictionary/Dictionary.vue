<template>
  <div class="main-conten-figure">
    <el-tabs type="border-card">
      <el-tab-pane label="分类目录配置">
     <CatalogDictionary></CatalogDictionary>
      </el-tab-pane>
      <el-tab-pane label="数据字典配置">
   <DateDictionary></DateDictionary>
      </el-tab-pane>
    </el-tabs>
    <!-- <ul class="tabChange">
      <li
        @click="CatalogHandler"
        style="float:left"
        :class="{ 'tab-item-active': currentComponent === 'CatalogDictionary' }"
      >分类目录配置</li>
      <li
        @click="DateHandler"
        :class="{ 'tab-item-active': currentComponent === 'DateDictionary' }"
      >数据字典配置</li>
    </ul>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive> -->
  </div>
</template>
<script>
import CatalogDictionary from "./CatalogDictionary";
import DateDictionary from "./DateDictionary";
export default {
  components: {
    CatalogDictionary,
    DateDictionary
  },
  data() {
    return {
      currentComponent: "CatalogDictionary"
    };
  },
  methods: {
    CatalogHandler() {
      this.currentComponent = "CatalogDictionary";
    },
    DateHandler() {
      this.currentComponent = "DateDictionary";
    }
  }
};
</script>
<style lang='scss' scoped>
.main-conten-figure{
  padding-right: 5px;
}
.el-tabs--border-card {
  box-shadow: none;
}
// .tabChange {
//   width: 100%;
//   cursor: pointer;
//   li {
//     padding: 10px;
//   }
// }
// .tab-item-active {
//   color: #b5adbd;
// }
</style>