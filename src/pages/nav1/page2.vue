<template>
  <div class="test-form">
    <fieldset>
      <legend><h3>表单测试</h3></legend>
      <el-form :model="testForm" :rules="validates" ref="testForm" label-width="180px" class="">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名称" prop="aliasname">
              <el-input v-model="testForm.aliasname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="真实姓名" prop="username">
              <el-input v-model="testForm.username"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="联系方式" prop="telphone">
              <el-input v-model="testForm.telphone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="testForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="证件类型" prop="certificate">
              <el-select v-model="testForm.certificate" placeholder="--请选择证件类型--">
                <el-option label="身份证" value="001"></el-option>
                <el-option label="军人证" value="002"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号" prop="telphone">
              <el-input v-model="testForm.telphone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="testForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="testForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="testForm.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="testForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="testForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('testForm')">立即创建</el-button>
          <el-button @click="resetForm('testForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      testForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      validates: {
      }
    }
  },
  methods: {
  },
  computed: {},
  mounted () {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.test-form {
  background: #fff;
  padding: 20px;
}
</style>
