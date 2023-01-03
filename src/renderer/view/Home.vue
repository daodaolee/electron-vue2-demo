<template>
  <div class="home">
    <DashboardSidebar />
    <LayoutMain />
  </div>
</template>
<script>
import DashboardSidebar from '@/components/home/DashboardSidebar.vue';
import LayoutMain from '@/components/home/LayoutMain.vue';
export default {
  name: 'home',
  components: {
    DashboardSidebar,
    LayoutMain
  },
  data() {
    return {

    }
  },
  methods: {
    lockScreen() {
      this.$router.push("/lockScreen")
    }
  }
}
</script>
<style lang="scss">
.home {
  padding: 35px 0;
  @include flex;
  margin: 0 auto;
  width: max-content;
}
</style>