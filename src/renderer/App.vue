<template>
  <div id="app" class="w100 h100">
    <router-view></router-view>
  </div>
</template>

<script>
import { mouseRight } from "./interactive"
export default {
  name: 'electron-vue',
  mounted() {
    window.addEventListener("contextmenu", function (e) {
      e.preventDefault()
      mouseRight()
    })
  }
}
</script>

<style>
/* CSS */
</style>
