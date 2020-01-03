<template>
  <div>
    <div class="navMenu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>系统配置</el-breadcrumb-item>
        <el-breadcrumb-item>调研组成员配置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <div class="channel">
        <label>调研渠道:</label>
        <select v-model="channelitem">
          <option v-for="(item,index) in channelItem.type" :key="index">{{item}}</option>
        </select>
      </div>
      <div class="operationbtn">
        <el-button type="success" @click="createMember">新建</el-button>
        <el-button type="success">查询</el-button>
      </div>

      <!-- table表格 -->
      <div class="table">
        <el-table :data="tableData" style="width: 100%" :border="true">
          <el-table-column prop="channel" label="调研渠道" align="center"></el-table-column>
          <el-table-column prop="leader" label="调研组长" align="center"></el-table-column>
          <el-table-column prop="member" label="调研成员" align="center"></el-table-column>
          <el-table-column prop="time" label="操作时间" align="center"></el-table-column>
          <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
          <el-table-column prop="operate" label="操作" align="center">
            <template slot-scope="socpe">
              <el-button type="text" @click="editor(socpe.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <Pagination :total="page.total" :current-page="page.current"></Pagination>
      </div>
      <!-- 新建和编辑数据弹窗 -->
      <div class="dialogshow">
        <el-dialog :visible.sync="MemberVisible " width="30%" center>
          <div>
            <label>调研渠道:</label>
            <select v-model="newMemberData.channel">
              <option v-for="(item,index) in channelItem.type" :key="index">{{item}}</option>
            </select>
          </div>
          <div>
            <label>调研组长:</label>
            <textarea v-model="newMemberData.leader"></textarea>
          </div>
          <div>
            <label>调研成员:</label>
            <textarea v-model="newMemberData.member"></textarea>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="MemberVisible  = false">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      memberFlag: 0, //0为新建 1为编辑
      MemberVisible: false,
      channelitem: "",
      channelItem: { type: ["8008", "SSC窗口组"] },
      tableData: [
        {
          channel: "8008",
          leader: "v_stpeng(彭树通)",
          member: "v_xxiaodliu(刘晓东)",
          time: "2020.01.01",
          operator: "12"
        }
      ],
      newMemberData: {
        channel: "",
        leader: "",
        member: "",
        time: "",
        operator: ""
      },
      page: {
        total: 100,
        size: 5,
        current: 1
      }
    };
  },
  methods: {
    createMember() {
      console.log("新建");
      this.newMemberData = {
        channel: "",
        leader: "",
        member: "",
        time: "",
        operator: ""
      };
      this.newMemberData.time = this.getNowFormatDate();
      this.memberFlag = 0;
      this.newMemberData.operator = "12";
      this.MemberVisible = true;
    },
    editor(data) {
      console.log(data);
      this.MemberVisible = true;
      this.newMemberData = JSON.parse(JSON.stringify(data));
      this.newMemberData.time = this.getNowFormatDate();
      this.memberFlag = 1;
      this.newMemberData.operator = "12";
      console.log(this.newMemberData);
    },
    confirm() {
      if (this.memberFlag === 0) {
        console.log("新建成功");
        console.log(this.newMemberData);
        this.tableData.push(this.newMemberData);
      } else {
        console.log("编辑成功");
        console.log(this.newMemberData);
      }
      //   this.DialogVisible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.channel,
.operationbtn {
  padding-right: 30px;
}
.channel {
  padding-top: 20px;
  label {
    margin-right: 10px;
  }
  select {
    width: 150px;
    height: 25px;
  }
}
.operationbtn {
  padding-top: 10px;
  padding-bottom: 10px;
}
.dialogshow {
  label {
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 5px;
  }
  select {
    width: 150px;
    height: 25px;
    margin-bottom: 10px;
  }
  textarea {
    width: 250px;
    height: 80px;
    margin-bottom: 10px;
  }
}
.el-dialog__footer {
  text-align: center;
}
</style>