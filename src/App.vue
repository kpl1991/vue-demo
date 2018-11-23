<template>
  <div id="app">
    <background></background>
    <router-view/>
  </div>
</template>

<script>
import Background from '@/components/Background'
export default {
  name: 'App',
  components: {
    Background
  }
}
</script>

<style>
#app {
  margin: -8px;
}
</style>
