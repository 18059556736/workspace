<template>
    <nav style="overflow: auto;">
        <ul class="pagination" id="pagination">
          <li :class="{'disabled': current == 1}">
            <a href="javascript:;" @click="setCurrent(1)"> 首页 </a>
          </li>
          <li :class="{'disabled': current == 1}">
            <a href="javascript:;" @click="setCurrent(current - 1)">上一页</a>
          </li>
          <li v-for="p in grouplist" :class="{'active': current === p.val}">
            <a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
          </li>
          <li :class="{'disabled': current == page}">
            <a href="javascript:;" @click="setCurrent(current + 1)">下一页</a>
          </li>
          <li :class="{'disabled': current == page}">
            <a href="javascript:;" @click="setCurrent(page)"> 末页 </a>
          </li>
          <li id="p_each">
            <span>每页显示</span>
            <select class="page_select" @change="setCurrent(current)" v-model="currentSize">
              <option v-for="size in pageSizeArray" :key="size" :value="size">{{size}}</option>
            </select>
            <span class="p_eachR">条</span>
          </li>
          <!-- <div id="goto">
            <span>前往</span>
              <input type="text" style="outline:none" v-model="jumpPageNumber"
                @keydown="goPage(jumpPageNumber,$event)"
                @blur.prevent="blurGoPage(jumpPageNumber)">
              <span>页</span>
          </div> -->
        </ul>
        <div>
          <div class="p_total">共{{page}}页/{{total}}条</div>
        </div>
    </nav>
</template>

<script>
export default{
  data () {
    return {
      current: this.currentPage,
      jumpPageNumber: '',
      currentSize: this.pageSizeArray[0]
    }
  },
  props: {
    total: {// 数据总条数
      type: Number,
      default: 0
    },
    pageSizeArray: {// 每页显示数量
      type: Array,
      default () {
        return [10, 20]
      }
    },
    // display: {// 每页显示条数
    //   type: Number,
    //   default: 10
    // },
    currentPage: {// 当前页码
      type: Number,
      default: 1
    },
    pagegroup: {// 显示的分页条数 为5是则>>1 2 3 4 5...
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () { // 总页数
      return Math.ceil(this.total / this.currentSize)
    },
    grouplist: function () { // 获取分页页码
      var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current
      if (len <= this.pagegroup) {
        while (len--) {
          temp.push({ text: this.page - len, val: this.page - len })
        }
        ;
        return temp
      }
      while (len--) {
        temp.push(this.page - len)
      }
      ;
      var idx = temp.indexOf(center);
      (idx < count) && (center = center + count - idx);
      (this.current > this.page - count) && (center = this.page - count)
      temp = temp.splice(center - count - 1, this.pagegroup)
      do {
        var t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pagegroup) {
        (this.current > count + 1) && list.unshift({ text: '...', val: list[0].val - 1 });
        (this.current < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 })
      }
      return list
    }
  },
  methods: {
    // 失去焦点
    blurGoPage (jumpPageNumber) {
      if (Number(jumpPageNumber) <= 0) {
        jumpPageNumber = 1
      }
      if (Number(jumpPageNumber) >= this.page) {
        jumpPageNumber = this.page
      }
      this.setCurrent(Number(jumpPageNumber))
    },
    // 跳转页面
    goPage (jumpPageNumber, e) {
      if (e.keyCode === 13) {
        this.blurGoPage(jumpPageNumber)
      }
    },
    setCurrent: function (idx) {
      if (this.current != idx && idx > 0 && idx < this.page + 1) { // 点击的页面不是当前的页面
        this.current = idx
        // 父组件通过pagechange方法来接受当前的页码
        this.$emit('pagechange', this.current, this.currentSize)
      }
    }
  },
  watch: {// 监听页面size变化
    currentPage (val) {
      this.current = val
    },
    currentSize (newValue, oldValue) {
      // console.log(newValue,oldValue)
      if (newValue !== oldValue) {
        if (this.current >= this.page) { // 当前页面大于总页面数
          this.current = this.page
        }
        this.$emit('pagechange', this.current, this.currentSize)
      }
    }
  }
}
</script>

<style lang="less" scoped>
    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .p_total{
        margin-top: 5px;
        float: right;
      }
    }
    .pagination {
      overflow: hidden;
      display: table;
      margin-top: 20px;
      height: 50px;
      list-style:none;
      float: left;
      li {
          float: left;
          margin: 3px 3px;
          color: #666;
        a {
          display: block;
          width: auto;
          padding: 0 12px;
          height: 30px;
          text-align: center;
          line-height: 29px;
          font-size: 12px;
          text-decoration: none;
          border: 1px #ccc solid;
          border-radius: 5px;
          &:hover {
              border: 1px #0054db solid;
              border-radius: 5px;
            }
        }
      }
      .active a{
        color: #0054db;
        border: 1px #0054db solid;
        border-radius: 5px;
        &:hover{
          border: 1px #0054db solid;
        }
      }
      #p_each{
          float: left;
          margin: 3px;
          color: #666;
          text-align: center;
          line-height: 30px;
          font-size: 12px;
          margin-left: 8px;
          input{
            width: 30px;
            height: 30px;
            margin: 0 6px;
            outline: none;
          }
          select{
            height: 30px;
          }
          .p_eachR{
            margin-right: 20px;
          }
      }
      .page_select{
        margin: 0 10px;
      }
      .disabled{
        a{
            color: #CCC;
            &:hover{
              background: #fff;
              cursor: not-allowed;
              border: 1px #ccc solid;
            }
          }
      }
  }
</style>
