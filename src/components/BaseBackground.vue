<template>
  <div class="bgd">
    <canvas id="bg-canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    <audio id="bgm" controls="controls" preload="auto" autoplay="autoplay" loop="loop">
      <source src="../assets/audios/kiss the rain.mp3" type="audio/mp3">
      <source src="../assets/audios/故乡的原风景.mp3" type="audio/mp3">
      <source src="../assets/audios/天籁之音.mp3" type="audio/mp3">
      <source src="static/drip.mp3" type="audio/mp3">
      <source src="../assets/audios/初雪.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data () {
    return {
      canvasWidth: document.documentElement.clientWidth,
      canvasHeight: document.documentElement.clientHeight,
      bgmPlay: false
    }
  },
  methods: {
    drawBgm () {
      let canvas = document.querySelector('#bg-canvas')
      let ctx = canvas.getContext('2d')

      // 初始角度为0
      let step = 0
      // 定义三条不同波浪的颜色
      let lines = [
        'rgba(0,222,255, 0.2)',
        'rgba(157,192,249, 0.2)',
        'rgba(0,168,255, 0.2)'
      ]

      let loop = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        let lgrd = ctx.createLinearGradient(0, canvas.height, canvas.width, 0)
        lgrd.addColorStop(0, '#ccc')
        lgrd.addColorStop(1, '#fff')
        ctx.fillStyle = lgrd
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        step++
        // 画3个不同颜色的矩形
        for (let j = lines.length - 1; j >= 0; j--) {
          ctx.fillStyle = lines[j]
          // 每个矩形的角度都不同，每个之间相差45度
          let angle = ((step + j * 45) * Math.PI) / 180
          let deltaHeight = Math.sin(angle) * 50
          let deltaHeightRight = Math.cos(angle) * 50
          ctx.beginPath()
          ctx.moveTo(0, canvas.height / 2 + deltaHeight)
          ctx.bezierCurveTo(
            canvas.width / 2,
            canvas.height / 2 + deltaHeight - 50,
            canvas.width / 2,
            canvas.height / 2 + deltaHeightRight - 50,
            canvas.width,
            canvas.height / 2 + deltaHeightRight
          )
          ctx.lineTo(canvas.width, canvas.height)
          ctx.lineTo(0, canvas.height)
          ctx.lineTo(0, canvas.height / 2 + deltaHeight)
          ctx.closePath()
          ctx.fill()
        }
        requestAnimationFrame(loop)
      }

      loop()
    }
  },
  watch: {
    bgmPlay () {
      let bgm = document.getElementById('bgm')
      if (this.bgmPlay) {
        bgm.play().then(() => {
        }).catch((err) => {
          console.log(err)
          bgm.muted = true
          bgm.play()
        })
      } else {
        bgm.pause()
      }
    }
  },
  mounted () {
    let that = this
    let bgm = document.getElementById('bgm')
    bgm.addEventListener('canplay', () => {
      that.bgmPlay = true
    })
    this.drawBgm()

    window.onresize = () => {
      this.canvasWidth = document.documentElement.clientWidth
      this.canvasHeight = document.documentElement.clientHeight
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
