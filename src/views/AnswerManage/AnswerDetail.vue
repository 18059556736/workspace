<template>
  <div>
    <div class="navMenu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>调研答卷</el-breadcrumb-item>
        <el-breadcrumb-item>答卷管理</el-breadcrumb-item>
        <el-breadcrumb-item>答卷详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <h2>常规用户反馈收集</h2>
      <Form :showFlag="flag" @getFormData="getFormData"></Form>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column prop="name" label="调研问卷名称" align="center"></el-table-column>
          <el-table-column prop="sortsTow" label="二级分类" align="center"></el-table-column>
          <el-table-column prop="createdPeopel" label="创建人" align="center"></el-table-column>
          <el-table-column prop="createdTime" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="staff" label="员工姓名" width="180" align="center"></el-table-column>
          <el-table-column prop="question" label="问题一" align="center"></el-table-column>
          <el-table-column prop="answer" label="答案一" align="center"></el-table-column>
          <el-table-column prop="question" label="问题一" align="center"></el-table-column>
          <el-table-column prop="answer" label="答案一" align="center"></el-table-column>
          <el-table-column prop="operate" label="操作" align="center">
            <template slot-scope="socpe">
              <el-button type="text" @click="deleteDetails(socpe.row)">查看</el-button>
              <el-button type="text" @click="deleteDetails(socpe.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination :total="page.total" :current-page="page.current"></Pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkFormDate: {},
      flag: {
        statusFlag: false,
        sourceFlag: false,
        exportFlag: true,
        aliveFlag: false
      },
      page: {
        total: 100,
        size: 5,
        current: 1
      },
      tableData: [
        {
          name: "1",
          sortsOne: "专项调研",
          sortsTow: "全公司",
          createdPeopel: "S3",
          createdTime: "1",
          staff: "2019.1.1-2019.12.31",
          question: 11,
          Number: 100,
          answer: "调研中",
          operate: "2"
        },
        {
          name: "1",
          sortsOne: "专项调研",
          sortsTow: "全公司",
          createdPeopel: "S3",
          createdTime: "1",
          staff: "2019.1.1-2019.12.31",
          question: 11,
          Number: 100,
          answer: "调研中",
          operate: "2"
        }
      ]
    };
  },
  methods: {
    getFormData(data) {
      console.log(data);
    },
    deleteDetails() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.checkFormDate = this.$store.state.checkFormDate;
    console.log(this.checkFormDate);
  }
};
</script>
<style lang="scss" scoped>
.el-table {
  border: 1px solid #ebeef5;
  border-bottom: none;
}
.checkDetails {
  float: left;
  cursor: pointer;
  padding-right: 5px;
}
</style>