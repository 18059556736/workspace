<template>
  <div>
    <form action ref="form">
      <div class="text-c row col-md-12">
        <div class="col-md-3">
          <label for>调研问卷名称:</label>
          <input type="text" v-model="form.name" />
        </div>
        <div class="col-md-3">
           <label for>调研分类:</label>
          <select v-model="form.sort">
            <option v-for="item in sorts.type">{{item}}</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for>适用人群:</label>
          <select v-model="form.type">
            <option v-for="item in peoples.type">{{item}}</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for>调研渠道:</label>
          <select v-model="form.channel">
            <option v-for="item in channel.type">{{item}}</option>
          </select>
        </div>
      </div>

      <div class="text-c row col-md-12">
        <div class="col-md-3">
          <label for>一级产品分类:</label>
           <select v-model="form.Onesort">
            <option v-for="item in Onesort.type">{{item}}</option>
          </select>
        </div>
        <div class="col-md-3">
          <label for>二级产品分类:</label>
          <input type="text" v-model="form.Towsort" />
        </div>
        <div class="col-md-3">
          <label for>关键字:</label>
          <input type="text" v-model="form.keyWord" />
        </div>
        <div class="col-md-2">
            <label for>调研期间:</label>
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="—"
            start-placeholder="开始"
            end-placeholder="结束"
            value-format="yyyy-MM-dd"
            prefix-icon="none"
          ></el-date-picker>
        </div>
      </div>
      <div class="col-md-12 buttons">
        <el-button type="success" @click="SearchFrom()">搜索</el-button>
        <el-button type="success" v-show="exportFlag">导出</el-button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  //判断是否显示的组件
  props: {
    showFlag: {
      type: Object,
      default: 0
    }
  },
  data() {
    return {
      exportFlag: this.showFlag.exportFlag,
      sorts: { type: ["常规用研", "专项用研"], default: false },
      peoples: {
        type: [
          "全公司",
          "CDG",
          "CSIS",
          "IES",
          "PCG",
          "WXG",
          "TEG",
          "S1",
          "S2",
          "S3"
        ]
      },
      channel: { type: ["8008", "SSC窗口组"] },
      status: { type: ["调研中", "已结束"], default: this.showFlag.statusFlag },
      sources: { type: [], default: this.showFlag.sourceFlag },
      Onesort:{type:['产品','政策','流程']},
      //收集表单数据
      form: {
        name: "",
        sort: "",
        type: "",
        channel: "",
        Onesort:'',
        Towsort:'',
        keyWord: "",
        time: "",
      }
    };
  },
  methods: {
    SearchFrom() {
      //   console.log(this.form);
      this.$emit("getNewFormData", this.form);
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  width: 100%;
  min-height: 150px;
}
.col-md-12 {
  width: 100%;
  float: left;
}
.col-md-3 {
  width: 23%;
  float: left;
  margin-top: 10px;
}
.col-md-2 {
  width: 31%;
  float: left;
  margin-top: 10px;
}
label {
  width: 30%;
  min-width: 90px;
  display: inline-block;
  text-align: right;
  margin-right: 5px;
}
input,
select {
  height: 31px;
  width: 50%;
  border-radius: 4px;
}
.el-input__inner {
  width: 50%;
  height: 35px;
  padding: 0 10px;
  // min-width: 251px;
}
// .el-date-editor {
//   height: 35px;
// }
.buttons {
  padding: 10px 0 0 20px;
}
.el-button {
  padding: 5px 5px;
}
</style>