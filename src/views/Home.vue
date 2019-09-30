<template>
	<div class="home">
		<x-header :left-options="{showBack: false}">点歌列表</x-header>
		<scroller lock-x scrollbar-y height="100%" ref="scroller">
			<group title="下拉刷新">
				<cell title="童话镇" value="Eric： 打赏:20元" is-link></cell>
				<cell title="春夏秋冬" value="Weis: 打赏:20元" is-link></cell>
				<cell title="告白气球" value="王佳: 打赏:10元" is-link></cell>
				<cell title="再度重相逢" value="Eric ： 打赏:20元" is-link></cell>
				<cell title="不为谁而作的歌" value="Weis: 打赏:20元" is-link></cell>
				<cell title="退后" value="王佳: 打赏:10元" is-link></cell>
			</group>
		</scroller>
	</div>
</template>

<style lang="less">
.home {
	width: 100%;
}
</style>

<script>
// @ is an alias to /src
import { XHeader, Group, Cell, Scroller } from "vux";
export default {
	name: "home",
	components: {
		XHeader,
		Group,
    Cell,
    Scroller
	}
};
</script>
