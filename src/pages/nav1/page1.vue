<template>
  <div id="page1_echarts"></div>
</template>

<script>
export default {
  name: 'Page1',
  data () {
    return {
    }
  },
  methods: {
    _random () {
      return (Math.random() * 100).toFixed(2)
    },
    getData () {
      return [
        {
          name: 'A',
          value: this._random()
        },
        {
          name: 'B',
          value: this._random()
        },
        {
          name: 'C',
          value: this._random()
        },
        {
          name: 'D',
          value: this._random()
        },
        {
          name: 'E',
          value: this._random()
        },
        {
          name: 'F',
          value: this._random()
        }
      ]
    }
  },
  computed: {
  },
  mounted () {
    let echartsInstance = this.echarts.init(this.$el)
    let data = this.getData()
    echartsInstance.setOption({
      color: ['#3398DB'],
      title: {
        left: '3%',
        text: '一个小玩意儿'
      },
      tooltip: {
        trigger: 'cross',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: 80,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          name: 'X轴',
          data: data.map(item => {
            return item.name
          }),
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Y轴'
        }
      ],
      legend: {
        bottom: 0,
        data: ['系列一']
      },
      series: [
        {
          name: '系列一',
          type: 'bar',
          barWidth: 30,
          itemStyle: {
            barBorderRadius: 30
          },
          data: data
        }
      ]
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
#page1_echarts {
  width: 100%;
  height: 500px;
}
</style>
