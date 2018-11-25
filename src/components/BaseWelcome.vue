<template>
  <div v-html="msg" @click="goIn"></div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcom to my home'
    }
  },
  methods: {
    goIn () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
