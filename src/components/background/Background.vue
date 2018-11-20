<template>
  <div class="bgd" v-html="msg"></div>
</template>

<script>
export default {
  name: 'Background',
  data () {
    return {
      msg: '<i class="fa fa-check"></i>hahdfh '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgd{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
