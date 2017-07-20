<template>
	<div class="navigator">
		<div class="left" @click="goBack()" v-show="headerData.showBack"><i class="iconfont">&#xe602;</i></div>
		<div class="middle">{{headerData.pageTitle}}</div>
		<div class="right" v-show="headerData.showRight">{{headerData.rightTitle}}</div>
	</div>
	<div v-show="headerData.showTab" class="nav-wrapper">
		<div class="section nav-boxer">
			<div class="nav-box">
				<ul>
					<li v-for="item in tabList">{{item.tabName}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/babel">
    require("less/common/header.less");
	export default{

		props: ["headerData"],
		data(){
			return{
				tabList:[]
			}
		},
		ready(){
			if(this.headerData === undefined){
				this.headerData = {
					pageTitle:'',
					showRight:true,
					showBack:true,
					showTab:false,
					rightTitle:''
				}
			}
			if(this.headerData.showBack === undefined){
				this.headerData.showBack=true
			}
			if(this.headerData.showRight===undefined){
				this.headerData.showRight=true
			}
			if(this.headerData.showTab===undefined){
				this.headerData.showTab=false
			}
			if(this.headerData.pageTitle===undefined){
				this.headerData.pageTitle=''
			}
			if(this.headerData.rightTitle===undefined){
				this.headerData.rightTitle=''
			}
		},
		methods:{
			load(){
				let self = this
				$.ajax({
					url:"http://localhost:9090/tab",
					success:function (res) {
						res.forEach((item) => {
							let newItem = item;
							self.tabList.push(newItem);
						});
					}
				})
			},
			goBack(){
				history.go(-1)
			}
		},
		created: function(){
			this.load()
		}
	}
    
</script>

<style lang="less" rel="stylesheet/less" scoped="">

</style>