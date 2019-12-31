<template>
  <div>
    <div class="navMenu">
      当前位置
      <span>&gt;调研答卷</span>
      <span>&gt;新建调研答卷</span>
    </div>
    <NewForm @getNewFormData="getNewFormData" :showFlag="flag"></NewForm>
    <div>
      <el-button type="text" @click="newQuestionnaire">新建</el-button>
      <el-button type="text" @click="centerDialogVisible =true">导入</el-button>
    </div>
    <el-dialog title="请选择导入文件" :visible.sync="centerDialogVisible " width="30%" center>
        <el-button size="small" type="text" @click="downloadHandler">下载模板</el-button>
      <unploadFile></unploadFile>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible  = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible  = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: { statusFlag: true, sourceFlag: true, exportFlag: false },
      centerDialogVisible: false
    };
  },
  methods: {
    getNewFormData(data) {
      console.log(data);
    },
    newQuestionnaire() {
      this.$router.push("QuestionnaireModel");
    },
    downloadHandler() {
      console.log("下载");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>