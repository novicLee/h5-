<template>
    <div class="container">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="我的车辆" left-arrow @click-left="onClickLeft" class="navBar">
        <template #left>
          <van-icon name="arrow-left" color="#ccc" size="18" />
        </template>
      </van-nav-bar>


      <div class="top-margin">
        <cell-carinfo></cell-carinfo>
      </div>


      <div class="bottomBtn">
        <!-- <van-button type="primary" color="#ffcd00" style="width:100%">确认</van-button> -->
        <van-button type="primary" color="#ffcd00" block @click="confirmBtn">确认</van-button>
      </div>
    </div>
</template>

<script>
import cellCarinfo from './cellCarinfo'
export default {
    components: {
      cellCarinfo
    },
    data() {
        return {

        };
    },
    props: {

    },
    methods: {
      onClickLeft () {
        this.$router.go(-1)
      },
      confirmBtn () {
        this.$router.push({
          name : 'Home'
        })
      }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
};
</script>

<style scoped lang="scss">
/deep/ .van-nav-bar__title {
  color:#DA291C;
  font-weight: bold;
}
</style>
