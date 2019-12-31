<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="doUpload"
      :limit="1"
      :before-upload="beforeUpload"
      :show-file-list='false'
    >
    <div>
      <el-button slot="trigger" size="small" type="primary" style="margin-right: 20px">导入文件</el-button>
     {{fileName}}
    </div>
      <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过10MB</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileName: "",
      url: "https://jsonplaceholder.typicode.com/posts/"
    };
  },
  methods: {
    beforeUpload(file) {
      console.log(file, "文件");
      this.files = file;
      const extension = file.name.split(".")[1] === "xls";
      const extension2 = file.name.split(".")[1] === "xlsx";
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!extension && !extension2) {
        this.$message.warning("上传模板只能是 xls、xlsx格式!");
        return;
      }
      if (!isLt10M) {
        this.$message.warning("上传模板大小不能超过 10MB!");
        return;
      }
      this.fileName = file.name;
      setTimeout(() => {
        this.submitUpload();
      }, 500);
      return false; // 返回false不会自动上传
    },

    // 上传excel
    submitUpload() {
          this.$message.warning("上传成功");
      console.log("上传");
    }
  }
};
</script>