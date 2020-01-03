<template>
  <div>
    <div class="navMenu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>调研答卷</el-breadcrumb-item>
        <el-breadcrumb-item>草稿箱</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <Form :showFlag="flag" @getFormData="getFormData"></Form>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column prop="name" label="调研问卷名称" align="center"></el-table-column>
          <el-table-column prop="sorts" label="分类" align="center"></el-table-column>
          <el-table-column prop="keyword" label="关键字" align="center"></el-table-column>
          <el-table-column prop="staffname" label="员工姓名" width="180" align="center"></el-table-column>
          <el-table-column prop="createdTime" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="operate" label="操作" align="center">
            <template slot-scope="socpe">
              <el-button type="text" @click="editorHandler(socpe.row)">编辑</el-button>
              <el-button type="text" @click="deleteHandler(socpe.row)">删除</el-button>
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
      flag: { statusFlag: false, sourceFlag: false, exportFlag: false },
      page: {
        total: 100,
        size: 5,
        current: 1
      },
      tableData: [
        {
          name: "1",
          sorts: "专项调研",
          keyword: "全公司",
          staffname: "S3",
          createdTime: "1"
        },
        {
          name: "1",
          sorts: "专项调研",
          keyword: "全公司",
          staffname: "S3",
          createdTime: "1"
        }
      ]
    };
  },
  methods: {
    getFormData(data) {
      console.log(data);
    },
    editorHandler(data) {
      console.log(data);
    },
    deleteHandler(data) {
      console.log("删除");
    }
  }
};
</script>