<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :router="true" default-active="/home/nav1/page1" class="" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <div v-for="menu in menus" :key="menu.menu_id">
              <el-menu-item v-if="!menu.submenu" :index="menu.menu_url" :route="menu.menu_url">
                <i class="fa fw" :class="menu.icon"></i>
                <span>{{ menu.menu_nm }}</span>
              </el-menu-item>
              <el-submenu v-if="menu.submenu" :index="menu.menu_url">
                <template slot="title">
                  <i class="fa fw" :class="menu.icon"></i>
                  <span>{{ menu.menu_nm }}</span>
                </template>
                <el-menu-item v-for="(submenu) in menu.submenu" :key="submenu.menu_id" :index="submenu.menu_url" :route="submenu.menu_url">
                  <i class="fa fw" :class="submenu.icon"></i>
                  <span>{{ submenu.menu_nm }}</span>
                </el-menu-item>
              </el-submenu>
            </div>
        </el-menu>
      </el-aside>
      <el-main>
        <p v-html="msg"></p>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {

      isCollapse: false,
      msg: 'container',
      menus: [
        {
          menu_id: 'M01',
          menu_nm: '导航一',
          menu_url: '/nav1',
          icon: 'fa-folder-open',
          submenu: [
            {
              menu_id: 'M0101',
              menu_nm: '页面一',
              icon: 'fa-line-chart',
              menu_url: '/home/nav1/page1'
            },
            {
              menu_id: 'M0102',
              menu_nm: '页面二',
              icon: 'fa-bar-chart',
              menu_url: '/nav1/page2'
            }
          ]
        },
        {
          menu_id: 'M02',
          menu_nm: '导航二',
          menu_url: 'nav2',
          icon: 'fa-folder-open',
          submenu: [
            {
              menu_id: 'M0201',
              menu_nm: '页面三',
              icon: 'fa-folder-open',
              menu_url: '/nav2/page1'
            },
            {
              menu_id: 'M0202',
              menu_nm: '页面四',
              icon: 'fa-folder-open',
              menu_url: '/nav2/page2'
            }
          ]
        },
        {
          menu_id: 'M03',
          menu_nm: '导航三',
          menu_url: 'nav3',
          icon: 'fa-folder-open'
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log('open')
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect () {
      console.log('select', arguments)
    }
  },
  created () {
    this.$http.get('http://192.168.1.112:8088/system/findMenus').then(response => {
      this.msg = response.data
    }, err => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
