
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
			<!--<div class="weather">-->
				<!--<div v-for="item in weatherList">-->
					<!--<img v-bind:src="item.weather_icon" alt="">-->
				<!--</div>-->
			<!--</div>-->
			<!--<template>-->
				<!--<span ref='countup'></span>-->
			<!--</template>-->
			<mt-button type="default">default</mt-button>

			<div class="news-list">
				<index-news-item :news-list="newsList"></index-news-item>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
    require("less/index.less");
	import { mapState } from 'vuex';
    export default{
		data(){
			return{
				itemList:[],
				newsList:[],
				weatherList:[],
				headerData:{
					pageTitle:"首页",
					showBack:false,
					showRight:false,
					showTab:true
				},
//				numAnim:null
			}
		},
    	methods:{
			load(){
				let self = this;
				$.ajax({
					url:"http://localhost:9090/indexItem",
					success:(res)=> {
						res.forEach((item)=> {
							let newItem = item;
							self.itemList.push(newItem)
						})
					}
				})
				self.$ToastCustom('tips here','bottom');
			},
			loadNews(){
				let self = this
				$.ajax({
					url:"http://localhost:9090/newsList",
					success:(res)=> {
						res.list.forEach((item)=> {
							let newItem = item;
							self.newsList.push(newItem)
						})
					}
				})
			},
			loadWeather(){
				let self = this
				$.ajax({
					url:"http://localhost:9090/weather",
					success:(res)=>{
						res.forEach((item)=>{
							let newItem = item;
							self.weatherList.push(newItem)
						})
					}
				})
			},
//			initCountUp(){
//				this.numAnim = new this.$CountUp(this.$refs.countup,0, 2017)
//				this.numAnim.start();
//			}
    	},
		computed: mapState({
			user: (state) => state.user
		}),
		created: function () {
			this.load();
			this.loadNews();
			this.loadWeather();
		},
		components: {
			"index-news-item": require('component/index/index_news_item.vue')
		},
		ready(){
			this.$store.commit('setUser', 'sdfsdf')
			console.log(this.$store.state.user)
		},
		mounted(){
//			this.initCountUp()
		}
    }
</script>

<style lang="less" rel="stylesheet/less" scoped="">
</style>