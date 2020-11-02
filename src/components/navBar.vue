<template>
    <div>
      <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" class="navBar">
        <template #left>
          <van-icon name="arrow-left" color="#ccc" size="18" />
        </template>
      </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {

    },
    methods: {
      onClickLeft () {
        console.log('父组件测试');
        this.$router.go(-1)
      },
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
