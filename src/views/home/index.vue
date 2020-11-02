<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="客户中心" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" color="#ccc" size="18" />
      </template>
      <template #right v-if="true">
        <van-icon name="chat-o" badge="9" color="#ccc" size="18" />
      </template>
    </van-nav-bar>
    <!-- 车牌区块 -->
    <div class="licensePlate" @click="carDetailInfo">京N12911</div>
    <!-- 个人信息区块 -->
    <div style="padding: 20px; background: #fff; margin: 10px 0px" class="personInfo">
      <!-- 头像和名称 -->
      <div style="width: 45%; position: relative">
        <img src="@/assets/ct.png" alt="" />
        <div style="width: calc(100% - 30px); float: right; text-align: center; height: 60px">
          <p style="height: 30px; background: #ffcd00; line-height: 30px; color: #fff; font-weight: bold">友客</p>
          <div style="padding-left:30px;text-align:left;" @click="getUserInfo">
            <p>鹿暖</p>
            <p>18234209358</p>
          </div>
        </div>
      </div>
      <!-- 保养区块 -->
      <div style="width: 45%; height: 60px">
        <van-row>
          <van-col span="10">上次保养</van-col>
          <van-col span="4"></van-col>
          <van-col span="10"><van-icon name="chat-o" dot /></van-col>
        </van-row>
        <van-row>
          <van-col span="10">2020-09-03</van-col>
          <van-col span="4"></van-col>
          <van-col span="10">10000Km</van-col>
        </van-row>
        <van-row>
          <van-col span="24">下次预计保养</van-col>
        </van-row>
        <van-row>
          <van-col span="10">2020-12-02</van-col>
          <van-col span="4"></van-col>
          <van-col span="10">15000Km</van-col>
        </van-row>
      </div>
    </div>
    <!-- 我的储值区块 -->
      <!-- <van-grid :column-num="5">
      <van-grid-item icon="photo-o" text="我的储值" />
      <van-grid-item icon="photo-o" text="我的卡券" />
      <van-grid-item icon="photo-o" text="我的积分" />
      <van-grid-item icon="photo-o" text="未付订单" />
      <van-grid-item icon="photo-o" text="更多服务" />
    </van-grid> -->
    <div class="gridContainer">
      <div class="gridItems">
        <p>0.00</p>
        <p>我的储值</p>
      </div>
      <div class="gridItems">
        <p><span style="color:#DA291C;">0</span>/0</p>
        <p>我的卡券</p>
      </div>
      <div class="gridItems">
        <p>1220</p>
        <p>我的积分</p>
      </div>
      <div class="gridItems">
        <p>0</p>
        <p>未付订单</p>
      </div>
      <div class="gridItems" style="border:none;">
        <p><van-icon name="chat-o" color="#DA291C"/></p>
        <p>更多服务</p>
      </div>
    </div>

    <div style="margin-top: 10px; padding: 10px; background: #fff">
      <div style="background: #f2f2f2; height: 80px"></div>
      <div style="padding: 10px; border-bottom: 2px solid #da291c">
        <van-row>
          <van-col span="14"></van-col>
          <van-col span="10">
            <div style="display:flex;justify-content:space-between;">
              <van-button round plain color="#da291c" size="small" class="vanBtn">维修履历</van-button>
              <van-button round plain color="#da291c" size="small" class="vanBtn">立即预约</van-button>
            </div>
          </van-col>
        </van-row>
        <!-- <van-button round plain color="#da291c" size="small" class="vanBtn">维修履历</van-button>
        <van-button round plain color="#da291c" size="small" class="vanBtn">立即预约</van-button> -->
      </div>
      <div style="display:flex;justify-content:space-between;padding:10px;">
        <p class="saleInfo">代付款</p>
        <p class="saleInfo">0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {},
  methods: {
    onClickLeft() {
      // Toast('返回')
      console.log('返回')
    },
    onClickRight() {
      console.log('信息')
    },
    carDetailInfo () {
      this.$router.push({
        name : 'myCar'
      })
    },
    getUserInfo () {
      this.$router.push({
        name: 'userInfo'
      })
    }
  },
  created() {},
  mounted() {},
  watch: {}
}
</script>

<style scoped lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
.border {
  border:1px solid red;
}
.licensePlate {
  border-radius: 3px;
  background: #ffcd00;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 5px;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
}
.vanBtn {
  padding: 5px;
}
.saleInfo {
  color: #da291c;
  font-weight: bold;
}
.personInfo {
  display: flex;
  justify-content: space-between;
}
.gridContainer {
  display:flex;padding:30px 20px;background:#fff;height:50px;
  .gridItems {
    flex:1;display:flex;justify-content:space-around;flex-direction:column;align-items:center;border-right: 0.5px solid #ccc;
    p:first-child {
      font-weight: bold;
    }
  }
}
</style>
