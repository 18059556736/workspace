<template>
  <div class="main-content">
    <h1 class="border-bottom border-bottom">调用问卷名称</h1>
    <div class="baseInformation border-bottom">
      基本信息
      <div class="clo-12">
        <div class="clo-4">
          <div class="intrduce">问卷简介:</div>
          <div class="intrduce-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam repellat,
            perspiciatis atque laborum fugiat at voluptatum nobis, laboriosam deserunt
            sapiente amet deleniti explicabo sequi quaerat tenetur ducimus magnam facilis voluptates.
          </div>
        </div>
        <div class="clo-3">
          <ul>
            <li>问卷来源:某某部门</li>
            <li>适用人群:全公司</li>
            <li>关键字:用户声音</li>
          </ul>
        </div>
        <div class="clo-3">
          <ul>
            <li>调研分类:常规调研</li>
            <li>调研数量:</li>
            <li>调研有效期限:</li>
          </ul>
        </div>
        <div class="clo-3">调研渠道:8008;SSC窗口;小T;乐问</div>
      </div>
    </div>
    <div class="searchInformation border-bottom">
      调研信息
      <div class="staffInformation">
        <p>
          <i>员工姓名:</i>
          <input type="text" v-model="staffInformation.name" />
        </p>
        <p>
          <i>BG:</i>
          {{staffInformation.BG}}
        </p>
        <P>
          <i>部门:</i>
          {{staffInformation.class}}
        </P>
        <p>
          <i>工作地:</i>
          {{staffInformation.place}}
        </p>
      </div>
      <div class="form">
        一级分类:
        <select v-model="form.Onesort">
          <option v-for="item in Onesort.type">{{item}}</option>
        </select>
        二级分类:
        <input type="text" />
      </div>
    </div>

    <div class="answerMain">
      问卷主体
      <div class="part-One">
        <div class="part-left">
          <p>1、</p>
          <textarea placeholder="自定义调研话题描述"></textarea>
          <textarea placeholder="用户反馈描述"></textarea>
          <div class="trends">
            用户反馈倾向
            <el-radio v-model="trends" label="正向" @change="getValue()">正向</el-radio>
            <el-radio v-model="trends" label="中立" @change="getValue()">中立</el-radio>
            <el-radio v-model="trends" label="负向" @change="getValue()">负向</el-radio>
            <el-radio v-model="trends" label="建议" @change="getValue()">建议</el-radio>
          </div>
          <div class="lewen">
            <div class="num">
              浏览量:
              <input type="text" />
              评论量:
              <input type="text" />
            </div>乐问链接:
            <input type="text" />
          </div>
        </div>
        <div class="part-right">
          <div class="channle">
            调研渠道:
          <el-radio v-model="channel" label="乐问" @change="getchannelValue()">乐问</el-radio>
          <el-radio v-model="channel" label="8008" @change="getchannelValue()">8008</el-radio>
          </div>
          引导话术提示:
          <input type="text">
        </div>
      </div>
      <div class="part-Tow"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trends: "正向",
      channel: "",
      staffInformation: {
        name: "小红",
        BG: "S3",
        class: "HR",
        place: "易博思"
      },
      Onesort: { type: ["产品", "政策", "流程"] },
      form: { Onesort: "", Towsort: "" }
    };
  },
  methods: {
    getValue() {
      console.log(this.trends);
    },
    getchannelValue() {
      console.log(this.channel);
    }
  }
};
</script>
<style lang="scss" scoped>
.border-bottom {
  width: 100%;
  border-bottom: 1px solid #3e3e3e;
}
.clo-12 {
  width: 90%;
  min-height: 150px;
  .clo-4 {
    width: 40%;
    float: left;
  }
  .clo-3 {
    padding-top: 10px;
    float: left;
    width: 20%;
  }
  .intrduce {
    float: left;
    min-height: 150px;
  }
  .intrduce-content {
    width: 70%;
  }
}

.searchInformation {
  min-height: 100px;
  .staffInformation {
    height: 30px;
    p {
      float: left;
      padding-right: 40px;
    }
    i {
      font-weight: normal;
      padding-right: 10px;
    }
  }
}

.answerMain {
  .part-One {
    .part-left {
      width: 800px;
      float: left;
      height: 200px;
    }
    .part-right {
      width: 600px;
      height: 200px;
      float: left;
    }
  }
  .part-Tow {
    width: 100%;
  }
  textarea {
    height: 58px;
    width: 700px;
    // overflow-y: scroll;
    // resize: none;
  }
  .trends {
    min-height: 58px;
    width: 700px;
    border: 1px solid #3e3e3e;
  }
  .lewen {
    margin-top: 20px;
    min-height: 78px;
    width: 700px;
    border: 1px solid #3e3e3e;
    .num {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .channle{
    width: 100%
  }
}
</style>