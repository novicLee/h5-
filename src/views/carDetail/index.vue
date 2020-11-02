<template>
  <div style="position: relative">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="车辆详情" left-arrow @click-left="onClickLeft" style="position:fixed;top:0px;width:100%">
      <template #left>
        <van-icon name="arrow-left" color="#ccc" size="18" />
      </template>
    </van-nav-bar>

    <carGroup :style="{'margin':'50px 0px'}"></carGroup>

    <div class="bottomBtn">
      <div style="display: flex; justify-content: space-around">
        <van-button color="#000" plain style="width: 30%" @click="onClickLeft">取消</van-button>
        <van-button style="width: 30%; color: #000; background: #ffcd00">保存</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import carGroup from './carGroup'
export default {
  components: {
    carGroup
  },
  data() {
    return {}
  },
  props: {},
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  created() {},
  mounted() {},
  watch: {}
}
</script>

<style scoped lang="scss">
// /deep/ .van-field__label {
//    width: 8.2rem;
// }
</style>
