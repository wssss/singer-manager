<template>
  <div class="about">
    <div class="center">
      <img src="../assets/images/photo.png" style="width:60px;height:60px;" alt="">

      <h1 class="vux-title" style="display:none;">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#35495e;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice">v{{version}}</p>
    </div>
    <group>
      <cell title="制定点歌列表" isLink>

      </cell>
      <cell title="我的收益" isLink>

      </cell>
      <cell title="关于我们" isLink>

      </cell>
    </group>
    <br>
    <p class="vue-version">current vue version: {{ vueVersion }}</p>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
import pkg from '../../package.json'
const version = pkg.version
const vueVersion = pkg.devDependencies.vue
export default {
  components: {
    Cell,
    Group,
  },
  data () {
    return {
      version,
      vueVersion
    }
  }
}
</script>

<style scoped>
.about{
  width: 100%;
  padding-top: 20%;
}
.vue-version {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
}
.demo-icon {
  margin-right: 15px;
}
.vux-title {
  vertical-align: middle;
  text-align: center;
  color: #04BE02;
  display: inline-block;
  width: 75px;
  height: 75px;
  line-height: 75px;
  border-radius: 50%;
}
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
.demo-tip {
  background-color: #fefcec;
  color: #f76a24;
  font-size: 12px;
  padding: 5px 10px;
  margin-top: 15px;
}
</style>