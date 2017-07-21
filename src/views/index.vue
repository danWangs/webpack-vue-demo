
<template>
	<app-header :header-data="headerData"></app-header>
	<div class="bg">
		<div class="list-wrapper">
			<ul class="menu-list">
				<li v-for="item in itemList" v-link="{name:item.linkUrl}">
					<img v-bind:src="item.itemUrl">
					{{item.itemName}}
				</li>
			</ul>
			<div class="news-list">
				<index-news-item :news-list="newsList"></index-news-item>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
    require("less/index.less");
    export default{
		data(){
			return{
				itemList:[],
				newsList:[],
				headerData:{
					pageTitle:"首页",
					showBack:false,
					showRight:false,
					showTab:true
				}
			}
		},
    	methods:{
			load(){
				let self = this;
				$.ajax({
					url:"http://localhost:9090/indexItem",
					success:function (res) {
						res.forEach((item)=> {
							let newItem = item;
							self.itemList.push(newItem)
						})
					}
				})
			},
			loadNews(){
				let self = this
				$.ajax({
					url:"http://localhost:9090/newsList",
					success:function (res) {
						res.list.forEach((item)=> {
							let newItem = item;
							self.newsList.push(newItem)
						})
					}
				})
			}
    	},
		created: function () {
			this.load();
			this.loadNews();
		},
		components: {
			"index-news-item": require('component/index/index_news_item.vue')
		}
    }
</script>

<style lang="less" rel="stylesheet/less" scoped="">
</style>