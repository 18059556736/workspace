<template>
  <div>
    <div class="navMenu">
      当前位置
      <span>&gt;调研答卷</span>
      <span>&gt;已录入调研答卷</span>
    </div>
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
            <el-button type="text" @click="checkHandler(socpe.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :total="page.total" :current-page="page.current"></Pagination>
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
          createdTime: "1",
        },
         {
          name: "1",
          sorts: "专项调研",
          keyword: "全公司",
          staffname: "S3",
          createdTime: "1",
        },
      ]
    };
  },
  methods: {
    getFormData(data) {
      console.log(data);
    },
    checkHandler(data){
        console.log(data);
    },
  }
};
</script>