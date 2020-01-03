<template>
  <div class="main-content">
    <div class="sort">
      一级分类:
      <select v-model="Onesort">
        <option v-for="item in sorts.type">{{item}}</option>
      </select>
    </div>
    <div class="status">
      生效状态:
      <select v-model="Status">
        <option v-for="item in status.type">{{item}}</option>
      </select>
    </div>
    <div class="operationbtn">
      <el-button type="success" @click="createCatalog">新建</el-button>
      <el-button type="success">查询</el-button>
    </div>

    <div class="table">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column prop="Onesort" label="一级分类" align="center"></el-table-column>
        <el-table-column prop="OnesortId" label="一级分类ID" align="center"></el-table-column>
        <el-table-column prop="status" label="生效状态" align="center"></el-table-column>
        <el-table-column prop="operateTime" label="操作时间" align="center"></el-table-column>
        <el-table-column prop label="操作人" align="center"></el-table-column>
        <el-table-column prop="operate" label="操作" align="center">
          <template slot-scope="socpe">
            <el-button type="text" @click="editor(socpe.row)" class="checkDetails">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :total="page.total" :current-page="page.current"></Pagination>
    </div>
    <!-- 点击按钮进行编辑或是新建操作 -->
    <el-dialog :visible.sync="CatalogVisible" width="30%" center>
      <div class="diglog-content">
        <div>
          <label>一级分类:</label>
          <input type="text" v-model="newdata.Onesort" />
        </div>
        <div>
          <label>一级分类ID:</label>
          <input type="text" v-model="newdata.OnesortId" />
        </div>
        <div>
          <label>生效状态:</label>
          <select v-model="newdata.status">
            <option v-for="(item,index) in status.type" :key="index">{{item}}</option>
          </select>
        </div>
        <div>
          <label>二级分类明细:</label>
          <p style="float:right">
            <el-button type="text">新增</el-button>
          </p>
          <div class="towTable">
            <el-table :data="sortTableData" style="width: 100%" :border="true">
              <el-table-column prop="towSortId" label="二级分类ID" align="center"></el-table-column>
              <el-table-column prop="towSortName" label="二级分类名" align="center"></el-table-column>
              <el-table-column prop="operate" label="操作" align="center">
                <template slot-scope="socpe">
                  <el-button type="text" @click="editor(socpe.row)" class="checkDetails">编辑</el-button>
                  <el-button type="text" @click="editor(socpe.row)" class="checkDetails">失效</el-button>
                  <el-button type="text" @click="editor(socpe.row)" class="checkDetails">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="CatalogVisible=false">取 消</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: 0, //0代表新建 1代表编辑
      newCatalogitem: "",
      CatalogVisible: false,
      Onesort: "",
      Status: "",
      sorts: { type: ["产品", "政策", "流程"], default: false },
      status: { type: ["生效", "失效"], default: false },
      tableData: [
        {
          Onesort: "产品",
          OnesortId: "product",
          status: "失效",
          operateTime: "",
          operator: ""
        },
        {
          Onesort: "政策",
          OnesortId: "product",
          status: "生效",
          operateTime: "",
          operator: ""
        }
      ],
      sortTableData: [
        {
          towSortId: "ZXC123",
          towSortName: "产品1"
        }
      ],
      page: {
        total: 100,
        size: 5,
        current: 1
      },
      newdata: {
        Onesort: "",
        OnesortId: "",
        status: "",
        operateTime: "",
        operator: ""
      }
    };
  },
  methods: {
    createCatalog() {
      // this.data = "";
      this.newdata = {
        Onesort: "",
        OnesortId: "",
        status: "",
        operateTime: "",
        operator: ""
      };
      this.newdata.operateTime = this.getNowFormatDate();
      this.newdata.operator = "12";
      this.CatalogVisible = true;
      this.flag = 0;
      this.tableData.push(this.newdata);
    },
    editor(data) {
      this.flag = 1;
      this.CatalogVisible = true;
      this.newdata = JSON.parse(JSON.stringify(data));
      this.newdata.operateTime = this.getNowFormatDate();
      this.newdata.operator = "12";
      console.log(this.newdata);
    },
    submit() {
      if (this.flag === 0) {
        console.log("新建成功");
        console.log(this.newdata);
      } else {
        console.log("编辑成功");
        console.log(this.newdata);
      }
    },
    checkDetails(data) {
      console.log(data);
    }
  }
};
</script>
<style lang='scss' scoped>
select {
  width: 100px;
}
.sort {
  float: left;
  padding-right: 20px;
}
.operationbtn {
  padding-top: 10px;
  padding-bottom: 10px;
}
.el-button {
  padding: 5px 5px;
}
.diglog-content {
  label {
    width: 100px;
    display: inline-block;
    text-align: right;
    margin-top: 10px;
    margin-right: 5px;
  }
}
</style>