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
</style>
