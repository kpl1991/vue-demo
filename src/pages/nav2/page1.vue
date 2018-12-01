<template>
  <div>
    <el-upload
      class=""
      ref="upload"
      name="files"
      multiple
      drag
      :auto-upload="false"
      :limit="5"
      :file-list="filelist"
      :action="getAction()"
      :on-success="success"
      :on-error="error"
      :on-change="handleChange">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitDownload">下载到本地</el-button>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  data () {
    return {
      filelist: []
    }
  },
  methods: {
    getAction () {
      return this.GLOBAL.baseURL + '/upload'
    },
    success () {
      console.log('success')
      console.log(arguments)
    },
    error () {
      console.log('error')
      console.log(arguments)
    },
    handleChange (file, files) {
      this.filelist = files
    },
    submitUpload () {
      if (!this.filelist.length) {
        this.$message({
          message: '请选择要上传的文件',
          type: 'warning'
        })
        return
      }

      this.$refs.upload.submit()
    },
    submitDownload () {
      this.$http({
        method: 'post',
        url: '/download',
        baseURL: this.GLOBAL.baseURL,
        data: {
          filename: '1.jpg'
        },
        responseType: 'blob',
        transformRequest: [function (data) {
          let res = ''
          for (let key in data) {
            res += key + '=' + data[key] + '&'
          }
          return res
        }]
      }).then((response) => {
        let data = response.data
        let url = window.URL.createObjectURL(new Blob([data]))
        let alink = document.createElement('a')
        alink.href = url
        alink.setAttribute('download', 'hah.jpg')
        alink.click()
      }).catch((err) => {
        console.log(err)
      })
    }
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
