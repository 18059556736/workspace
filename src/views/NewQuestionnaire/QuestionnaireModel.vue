<template>
  <div class="main-content">
    <div class="navMenu">
      当前位置
      <span>&gt;调研答卷</span>
      <span>&gt;答卷管理</span>
      <span>&gt;新建调研答卷</span>
    </div>
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
      <div class="sorts">
        <i>*</i>一级分类:
        <select v-model="form.Onesort">
          <!-- <option selected>---请选择---</option> -->
          <option v-for="item in Onesort.type">{{item}}</option>
        </select>
        <i>*</i>二级分类:
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
          <div class="lewen trends">
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
            <el-checkbox-group v-model="answerchannle">
              <el-checkbox label="乐问"></el-checkbox>
              <el-checkbox label="8008"></el-checkbox>
            </el-checkbox-group>
          </div>
          <textarea v-model="tip"></textarea>
        </div>
      </div>

      <div class="part-Tow">
        <div class="part-left">
          <p>2.对****的业务评价</p>
          <textarea placeholder="用户反馈描述"></textarea>
          <div class="trends">
            用户反馈倾向
            <el-radio v-model="comment" label="正向" @change="getcommentValue()">正向</el-radio>
            <el-radio v-model="comment" label="中立" @change="getcommentValue()">中立</el-radio>
            <el-radio v-model="comment" label="负向" @change="getcommentValue()">负向</el-radio>
            <el-radio v-model="comment" label="建议" @change="getcommentValue()">建议</el-radio>
          </div>
        </div>
        <div class="part-right">
          <div class="channle">
            调研渠道:
            <el-checkbox-group v-model="commentchannle">
              <el-checkbox label="乐问"></el-checkbox>
              <el-checkbox label="8008"></el-checkbox>
            </el-checkbox-group>
          </div>
          <textarea v-model="tip"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      couponSelected: "",
      commentchannle: [],
      answerchannle: [],
      trends: "正向",
      comment: "正向",
      channel: "",
      tip: "话术提示",
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
  created() {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    this.couponSelected = this.Onesort.type[0];
  },
  methods: {
    getValue() {
      console.log(this.trends);
    },
    getchannelValue() {
      console.log(this.channel);
    },
    getcommentValue() {
      console.log(this.comment);
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
.sorts {
  i {
    color: red;
  }
  select {
    min-width: 200px;
    margin-right: 20px;
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
textarea {
  resize: none;
}
.trends {
  border: 1px solid #e8e8e8;
  width: 700px;
  margin-bottom: 20px;
  height: 70px;
}
.part-One {
  width: 100%;
  min-height: 430px;
  .part-left {
    float: left;
    min-width: 800px;
    textarea {
      width: 700px;
      height: 80px;
      display: block;
      margin-bottom: 20px;
    }
  }
  .part-right {
    min-width: 220px;
    textarea {
      width: 200px;
      height: 250px;
      margin-top: 20px;
    }
  }
}
.part-Tow {
  width: 100%;
  height: 220px;
  .part-left {
    float: left;
    min-width: 800px;
    textarea {
      width: 700px;
      height: 80px;
      display: block;
      margin-bottom: 20px;
      margin-top: 20px;

    }
  }
  .part-right {
    min-width: 220px;
     textarea {
      width: 200px;
      height: 150px;
      margin-top: 10px;
    }
  }
}
</style>