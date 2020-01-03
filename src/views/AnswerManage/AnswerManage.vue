<template>
  <div>
    <div class="navMenu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item >当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>调研答卷</el-breadcrumb-item>
        <el-breadcrumb-item>答卷管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="main-content">
      <Form :showFlag="flag" @getFormData="getFormData"></Form>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column prop="name" label="调研问卷名称" align="center"></el-table-column>
          <el-table-column prop="sorts" label="调研分类" align="center"></el-table-column>
          <el-table-column prop="people" label="使用人群" align="center"></el-table-column>
          <el-table-column prop="sources" label="问卷来源" align="center"></el-table-column>
          <el-table-column prop="keyWord" label="关键字" align="center"></el-table-column>
          <el-table-column prop="time" label="调研期间" width="180" align="center"></el-table-column>
          <el-table-column prop="needNum" label="需求数量" align="center"></el-table-column>
          <el-table-column prop="Number" label="已录入数量" align="center"></el-table-column>
          <el-table-column prop="status" label="调研状态" align="center"></el-table-column>
          <el-table-column prop="operate" label="操作" align="center">
            <template slot-scope="socpe">
              <el-button type="text" @click="checkDetails(socpe.row)" class="checkDetails">查看</el-button>
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
      flag: {
        statusFlag: true,
        sourceFlag: true,
        exportFlag: false,
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
          sorts: "专项调研",
          people: "全公司",
          sources: "S3",
          keyWord: "1",
          time: "2019.1.1-2019.12.31",
          needNum: 11,
          Number: 100,
          status: "调研中"
        },
        {
          name: "2",
          sorts: "专项调研",
          people: "全公司",
          sources: "S3",
          keyWord: "1",
          time: "2019.1.1-2019.12.31",
          needNum: 11,
          Number: 100,
          status: "调研中"
        }
      ]
    };
  },
  methods: {
    getFormData(data) {
      console.log(data);
    },
    checkDetails(data) {
      //获取点击的用户数据
      // console.log(data);
      this.$router.push("AnswerDetail");
      this.$store.commit("formDate", data);
    }
    // handlePage (current, size) { // 分页 done
    //   this.page.current = current
    //   this.page.size = size
    //   this.getProductList()
    // }
  }
};
</script>
<style lang="scss" scoped>

.main-content {
  width: 100%;
}
.el-table {
  // margin-top: 20px;
  border: 1px solid #ebeef5;
  border-bottom: none;
}

.el-table .cell {
  text-align: center !important;
  cursor: pointer;
}
.checkDetails {
  cursor: pointer;
}
.el-table td,
.el-table th {
  text-align: center !important;
}
</style>