<template>
  <div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell center v-for="item in carList" :key="item.id">
          <template #title>
            <van-radio :name="item.name" label-disabled>
              <template #default>
                <p>{{item.title}}</p>
                <p style="color: #ccc">{{item.label}}</p>
              </template>
            </van-radio>
          </template>
          <template #right-icon>
            <van-icon name="arrow" @click="routerPush(item.id)" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      // 我的车辆列表假数据
      carList: [
        {
          name : '1',
          title : '京A123456',
          label : '12345645999',
          id : 11
        },
        {
          name : '2',
          title : '京A123456',
          label : '12345645999',
          id : 22
        },
      ]
    }
  },
  props: {},
  methods: {
    routerPush(id) {
      console.log(id);
       debugger
      this.$router.push({
        name: 'carDetail'
      })
    }
  },
  created() {},
  mounted() {},
  watch: {}
}
</script>

<style scoped lang="scss">
</style>
