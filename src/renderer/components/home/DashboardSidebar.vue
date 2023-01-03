<template>
  <div class="dashboard-sidebar">
    <div class="user_personal">
      <img src="../../assets/img/avatar/1.png" alt />
      <div class="username">{{ username }}</div>
      <div class="nickname">@{{ nickname }}</div>
      <div :class="['bio', !bio ? 'empty' : '']">{{ bio || '暂无简介' }}</div>
    </div>
    <div class="grid">
      <div class="total_day">
        <div class="num">{{ totalDay }}</div>
        <div class="name">打卡天数</div>
      </div>
      <div class="total_plan">
        <div class="num">{{ totalPlan }}</div>
        <div class="name">总计划</div>
      </div>
      <div class="complete_plan">
        <div class="num">{{ completePlan }}</div>
        <div class="name">已完成</div>
      </div>
    </div>
    <div class="operate">
      <i class="icon lock" title="锁屏" @click="showLockScreenHandle" />
      <i class="icon clock" title="定时提醒" />
    </div>

    <a-modal
      :visible="showLockScreen"
      @ok="lockScreenOk"
      @cancel="lockScreenCancel"
      cancelText="关闭"
      okText="确定"
      :keyboard="false"
      :closable="false"
      :maskClosable="false"
      title="设置密码"
      wrapClassName="lockScreenModal"
    >
      <a-form :form="lockScreenForm" :label-col="{ span: 8 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="锁屏密码">
          <a-input
            placeholder="请输入锁屏密码"
            v-decorator="['password', { rules: [{ required: true, message: '请输入锁屏密码!' }] }]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'userProfile',
  data() {
    return {
      avatarList: [],
      username: '道道里',
      nickname: 'DaoDaoLee',
      bio: "",
      totalDay: 50,
      totalPlan: 120,
      completePlan: 36,

      showLockScreen: false,
      lockScreenForm: this.$form.createForm(this)
    }
  },
  methods: {
    showLockScreenHandle() {
      this.showLockScreen = true;
    },
    lockScreenOk() {
      this.lockScreenForm.validateFields((err) => {
        if (err) {
          return
        }
        this.showLockScreen = false;
        this.$router.push('/lockScreen')
      });
    },
    lockScreenCancel() {
      this.lockScreenForm.resetFields();
      this.showLockScreen = false
    }
  }
}
</script>
<style lang="scss">
.dashboard-sidebar {
  width: 250px;
  padding-right: 20px;
  .user_personal {
    @include flex;
    @include flex-primary-axis-center;
    @include flex-secondary-axis-center;
    @include flex-column;
    padding: 0 24px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      margin: 8px 0 0;
      word-break: break-all;
    }
    .username {
      @include texts-ellipsis(3);
      font-weight: bold;
      font-size: 24px;
    }
    .nickname {
      font-size: 12px;
    }
    .bio {
      font-size: 14px;
      &.empty {
        color: #8c92a4;
      }
    }
  }
  .grid {
    padding: 0 30px;
    @include flex;
    @include flex-primary-axis-between;
    @include flex-secondary-axis-center;
    & > div {
      padding: 30px 0;
      @include flex;
      @include flex-column;
      @include flex-secondary-axis-center;
      @include flex-primary-axis-center;
      .num {
        font-size: 18px;
        font-weight: bold;
      }
      .name {
        font-size: 12px;
        color: #40485b;
        padding-top: 7px;
      }
    }
  }
  .operate {
    padding: 0 30px;
    @include flex;
    @include flex-primary-axis-center;
    flex-wrap: wrap;
    .icon {
      margin: 0 8px;
      cursor: pointer;
    }
    .lock {
      @include icon("30", "30", "../../assets/img/lock.png");
      position: relative;
    }
    .clock {
      @include icon("30", "30", "../../assets/img/clock.png");
      position: relative;
    }
  }
}
.lockScreenModal {
  .ant-form-item {
    margin: 0;
  }
}
</style>