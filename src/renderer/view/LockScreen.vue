<template>
  <div class="w100 h100 lock-screen">
    <div class="w100 h100 bg" :style="{ backgroundImage: bgImg }"></div>
    <div class="w100 h100 lock-container">
      <div class="avatar" :style="{ backgroundImage: avatarImg }"></div>
      <div class="username">{{ username }}</div>
      <div class="password">
        <input
          :class="['w100', isError ? 'shake' : '']"
          type="password"
          placeholder="输入密码"
          @keyup.enter="submitPwd"
          v-model="password"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgImg: `url(${require('../assets/img/lockScreen/lockScreenBg.jpg')})`,
      avatarImg: `url(${require('../assets/img/avatar/1.png')})`,
      username: '道道里',
      password: '',
      isError: false
    }
  },
  mounted() {
    // window.key
  },
  methods: {
    submitPwd() {
      if (!this.password || this.password !== '123') {
        this.isError = true
        setTimeout(() => {
          this.isError = false
        }, 300)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="scss">
.lock-screen {
  .bg {
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(4px);
    transform: scale(1.2);
  }
  .lock-container {
    @include flex;
    @include flex-column;
    @include flex-secondary-axis-center;
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding-top: 20vh;
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.09);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    .username {
      padding: 20px 0 50px;
      font-size: 18px;
      font-weight: bold;
      color: White;
      letter-spacing: 1px;
    }
    .password {
      @include flex;
      width: 200px;
      input {
        color: #fff;
        outline: 0;
        border: none;
        margin: 5px 0;
        font-size: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 4px 15px;
        border-radius: 20px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        flex: 1;
        transition: width 0.3s;
        &::placeholder {
          color: rgb(233, 230, 230);
          font-size: 14px;
        }
        &.shake {
          @include animate-shake(0.3s);
        }
      }
    }
  }
}
</style>