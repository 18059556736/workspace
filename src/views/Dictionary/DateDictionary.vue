<template>
  <div class="main-content">
    <div class="types">
      字典类型:
      <select v-model="Types">
        <option v-for="(item,index) in types.type" :key="index">{{item}}</option>
      </select>
    </div>
    <div class="status">
      生效状态:
      <select v-model="Status">
        <option v-for="(item,index) in status.type" :key="index">{{item}}</option>
      </select>
    </div>
    <div class="operationbtn">
      <el-button type="success" @click="createMember">新建</el-button>
      <el-button type="success">查询</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column prop="dioType" label="字典类型" align="center"></el-table-column>
        <el-table-column prop="dioNum" label="字典值" align="center"></el-table-column>
        <el-table-column prop="dioText" label="字典文本" align="center"></el-table-column>
        <el-table-column prop="status" label="生效状态" align="center"></el-table-column>
        <el-table-column prop="operateTime" label="操作时间" align="center"></el-table-column>
        <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
        <el-table-column prop="operate" label="操作" align="center">
          <template slot-scope="socpe">
            <el-button type="text" @click="editor(socpe.row)" class="checkDetails">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination :total="page.total" :current-page="page.current"></Pagination>
    </div>
    <!-- 点击新建或编辑时显示弹框 -->
    <div class="dialogcontent">
      <el-dialog :visible.sync="showMemberDialog" width="30%" center>
        <!-- <span>这是一段信息</span>
        -->
        <div>
          <label>字典类型:</label>
          <select v-model="newData.dioType">
            <option v-for="(item,index) in types.type" :key="index">{{item}}</option>
          </select>
        </div>

        <div>
          <label>字典值:</label>
          <input type="text" name="dioNum" v-model="newData.dioNum" />
        </div>

        <div>
          <label>字典文本:</label>
          <input type="text" name="dioText" v-model="newData.dioText" />
        </div>
        <div>
          <label>生效状态:</label>
          <select v-model="newData.status">
            <option v-for="(item,index) in status.type" :key="index">{{item}}</option>
          </select>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showMemberDialog = false">取 消</el-button>
          <el-button type="primary" @click="MemberConfirm">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMemberDialog: false,
      menberflag: 0, //0为新建，1为编辑
      Types: "",
      Status: "",
      types: {
        type: ["适用人群", "调研渠道", "问卷来源", "调研分类"],
        default: false
      },
      status: { type: ["生效", "失效"], default: false },
      tableData: [
        {
          dioType: "适用人群",
          dioNum: "CDG",
          dioText: "CDG",
          status: "生效",
          operateTime: "",
          operator: ""
        }
      ],
      page: {
        total: 100,
        size: 5,
        current: 1
      },
      newData: {
        dioType: "",
        dioNum: "",
        dioText: "",
        status: "",
        operateTime: "",
        operator: ""
      }
    };
  },
  methods: {
    createMember() {
      this.newData = {
        dioType: "",
        dioNum: "",
        dioText: "",
        status: "",
        operateTime: "",
        operator: ""
      };
      console.log("我是新建");
      this.newData.operateTime = this.getNowFormatDate();
      this.newData.operator = "12";
      this.menberflag = 0;
      this.showMemberDialog = true;
    },
    editor(data) {
      this.menberflag = 1;
      this.showMemberDialog = true;
      this.newData = JSON.parse(JSON.stringify(data));
      this.newData.operateTime = this.getNowFormatDate();
      this.newData.operator = "12";
      console.log(data);
    },
    MemberConfirm() {
      if (this.menberflag === 0) {
        console.log("新建成功");
        this.tableData.push(this.newData);
        console.log(this.newData);
      } else {
        console.log("编辑成功");
      }
    }
  }
};
</script>
<style lang='scss' scoped>
select {
  width: 100px;
}
.types {
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
.dialogcontent {
  label {
    width: 100px;
    display: inline-block;
    text-align: right;
    margin-top: 10px;
    margin-right: 5px;
  }
}
.el-dialog__footer {
  text-align: center !important;
}
</style>