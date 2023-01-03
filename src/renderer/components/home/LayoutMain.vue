<template>
  <div class="layout-main">
    <Contribution />
    <TargetPinned />
  </div>
</template>
<script>
import Contribution from "@/components/public/Contribution.vue";
import TargetPinned from "@/components/home/TargetPinned.vue";
export default {
  components: {
    Contribution,
    TargetPinned
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
.layout-main {
  // flex: 1;
  width: 720px;
  // max-width: 700px;
  // border:1px solid red
}
</style>