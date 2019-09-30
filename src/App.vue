<template>
	<div id="app">
		<section class="main-content">
      <router-view />
    </section>
    <tabbar v-if="!$route.meta.noTabbar" style="position:relative" @on-index-change="change()">
      <tabbar-item link="/">
        <img slot="icon"  src="./assets/images/home.png">
        <img slot="icon-active"  src="./assets/images/home-active.png">
        <span slot="label">点歌列表</span>
      </tabbar-item>
      <tabbar-item link="/about">
        <img slot="icon-active"  src="./assets/images/user-active.png">
        <img slot="icon" src="./assets/images/user.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
	</div>
</template>
<script>
import { Tabbar, TabbarItem } from "vux";

export default {
	components: {
		Tabbar,
    TabbarItem
  },
  data(){
    return {
     
    }
  },
  methods:{
    change(){
      
    }
  }
};
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  height: 100%;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  display: flex;
  flex-direction: column;

}
html,body{
  height: 100%;
}
.main-content{
  display: flex;
  flex: 1;
  overflow:auto;
}
.router-link-active{
  color: #09BB07;
}
</style>
