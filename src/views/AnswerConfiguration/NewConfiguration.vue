<template>
  <div>
    <div class="navMenu">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
        <el-breadcrumb-item>系统配置</el-breadcrumb-item>
        <el-breadcrumb-item>调研问卷配置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-content">
      <div class="border-bottom">
        <h1>{问卷名称}</h1>
      </div>
      <div class="baseInfo border-bottom form">
        <h1>基本信息</h1>
        <div class="clo-12">
          <div class="clo-3">
            <label>问卷简介:</label>
            <textarea></textarea>
          </div>
          <div class="clo-3">
            <p>
              <label>问卷来源:</label>
              <select>
                <option v-for="(item,index) in sources.type" :key="index">{{item}}</option>
              </select>
            </p>
            <p>
              <label>适用人群:</label>
              <select>
                <option v-for="(item,index) in peoples.type" :key="index">{{item}}</option>
              </select>
            </p>
            <p>
              <label>关键字:</label>
              <input type="text" name="keyword" />
            </p>
          </div>
          <div class="clo-3">
            <p>
              <label>调研分类:</label>
              <select>
                <option v-for="(item,index) in sorts.type" :key="index">{{item}}</option>
              </select>
            </p>
            <p>
              <label>需求数量:</label>
              <input type="text" name="num" />
            </p>
            <p>
              <label>调研期间:</label>
              <el-date-picker
                v-model="form.time"
                type="daterange"
                range-separator="—"
                start-placeholder="开始"
                end-placeholder="结束"
                value-format="yyyy-MM-dd"
                prefix-icon="none"
              ></el-date-picker>
            </p>
          </div>
          <div class="clo-3">
            <p>
              <label>调研状态:</label>
              <select>
                <option v-for="(item,index) in status.type" :key="index">{{item}}</option>
              </select>
            </p>
          </div>
        </div>
        <div>
          <div>
            <label>调研渠道:</label>
            <el-checkbox-group v-model="answerchannle">
              <el-checkbox label="8008"></el-checkbox>
              <el-checkbox label="SSC窗口"></el-checkbox>
              <el-checkbox label="乐问"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="surveyInfo border-bottom">
        <h1>调研信息</h1>
        <div>
          <label>员工姓名是否必填:</label>
          <select>
            <option>是</option>
            <option>否</option>
          </select>
        </div>
        <div>
          <label>一级分类产品:</label>
          <select>
            <option>是</option>
            <option>否</option>
          </select>
          <label>二级分类:</label>
          <input type="text" name="TowSort" />
        </div>
      </div>
      <div class="configureAnwser">
        <h1>问卷配置</h1>
        <el-button type="success">新增问题</el-button>
        <div class="answer">
          <div>
            <label>序号:</label>
            <input type="text" name="num" value="1" />
            <div>
              <label>调研渠道:</label>
              <el-checkbox-group v-model="answerchannle">
                <el-checkbox label="8008"></el-checkbox>
                <el-checkbox label="SSC窗口"></el-checkbox>
                <el-checkbox label="乐问"></el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: { time: "" },
      sorts: { type: ["常规用研", "专项用研"], default: false },
      status: { type: ["调研中", "已结束"], default: false },
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
        ],
        default: false
      },
      sources: { type: [], default: false },
      answerchannle: []
    };
  }
};
</script>
<style lang="scss" scoped>
.baseInfo {
  height: 220px;
  .clo-12 {
    // width: 100%;
    margin-top: 10px;
    height: 120px;
    // margin-right: 20px;
    .clo-3 {
      width: 25%;
      float: left;
      textarea {
        height: 100px;
      }
      input,
      select,
      textarea {
        width: 50%;
        height: 28px;
      }
    }
  }
  label {
    width: 100px;
    display: inline-block;
    text-align: right;
    margin-right: 5px;
    margin-bottom: 10px;
  }
  .el-input__inner {
    width: 60%;
    height: 35px;
    padding: 0 10px;
    //  min-width: 251px;
  }
  .el-checkbox-group {
    margin-left: 150px;
  }
}
.surveyInfo {
  label {
    width: 120px;
    display: inline-block;
    text-align: right;
    margin-right: 5px;
    margin-bottom: 10px;
  }
}
.configureAnwser {
}
.border-bottom {
  width: 100%;
  border-bottom: 1px solid #3e3e3e;
  padding-top: 5px;
  padding-bottom: 10px;
}
.el-checkbox-group{
    width: 300px;
    float: right;
}
</style>