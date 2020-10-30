<template>
  <div>
    <van-cell-group title="车辆信息">
      <div style="border-radius:5px">
      <van-field v-model="value" label="车牌号:" placeholder="请输入" />
      <van-field v-model="value" label="品牌:" placeholder="请输入" />
      <van-field v-model="value" label="车系:" placeholder="请输入" />
      <van-field v-model="value" label="车型:" placeholder="请输入" />
      <van-field v-model="value" label="车架号:" placeholder="请输入" />
      <van-field v-model="value" label="发动机号:" placeholder="请输入" />
      <van-field v-model="value" label="车身颜色:" placeholder="请输入" />
      <van-field v-model="value" label="内饰颜色:" placeholder="请输入" />
      <van-field v-model="value" label="排量:" placeholder="请输入" />
      <van-field v-model="value" label="AT/MT/CVT:" placeholder="请输入" />
      <van-field v-model="value" label="出厂日期:" placeholder="请输入" />
      <van-field v-model="value" label="购买日期:" placeholder="请输入" />
      <van-field v-model="value" label="上牌日期:" placeholder="请输入" />
      <van-field v-model="value" label="车辆价格:" placeholder="请输入" />
      <van-field v-model="value" label="本地车:" placeholder="请输入" />
      </div>
    </van-cell-group>
    <van-cell-group title="其他信息">
        <van-field v-model="value" label="总来店数:" placeholder="请输入" />
      <van-field v-model="value" label="文本总消费金额:" placeholder="请输入" />
      <van-field v-model="value" label="RFM:" placeholder="请输入" />
      <van-field v-model="value" label="末次来厂次数:" placeholder="请输入" />
      <van-field v-model="value" label="未来厂时长:" placeholder="请输入" />
      <van-field v-model="value" label="上次行驶里程:" placeholder="请输入" />
      <van-field v-model="value" label="年款:" placeholder="请输入" />
      <van-field v-model="value" label="行驶本有效期:" placeholder="请输入" />
      <van-field v-model="value" label="驾驶本有效期:" placeholder="请输入" />
      <van-field v-model="value" label="车辆用途:" placeholder="请输入" />
      <van-field v-model="value" label="延保到期日:" placeholder="请输入" />
      <van-field v-model="value" label="贷款到期日:" placeholder="请输入" />
      <van-field v-model="value" label="车龄(年):" placeholder="请输入" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {}
}
</script>

<style scoped lang="scss">
.van-cell-group__title {
  color:#DA291C;
  font-weight: 700;
}
.van-cell-group {
  margin: 5px;
  padding: 5px;
  border-radius: 10px;;
}
/deep/ .van-field__label {
  width: 3.2rem;
}
</style>
