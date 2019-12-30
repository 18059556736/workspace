<template>
<div>
 <NewForm @getNewFormData="getNewFormData" :showFlag="flag"></NewForm>
 <div>
   <p @click="newQuestionnaire">新建</p>
   <p>导入</p>
 </div>
</div>
 
  
</template>
<script>
export default {
  data() {
    return {
      flag: { statusFlag: true, sourceFlag: true, exportFlag: false }
    };
  },
  methods: {
    getNewFormData(data) {
      console.log(data);
    },
    newQuestionnaire(){
       this.$router.push('QuestionnaireModel')
    }
  }
};
</script>
<style lang="scss" scoped>
</style>