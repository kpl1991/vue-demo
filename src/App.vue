<template>
  <div id="app">
    <background></background>
    <img src="./assets/images/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Background from '@/components/background/Background'
/* eslint-disable */
export default {
  name: 'App',
  components: { Background },
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
