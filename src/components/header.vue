<template>
	<div class="navigator">
		<div class="left" @click="goBack()" v-show="headerData.showBack"><i class="iconfont">&#xe602;</i></div>
		<div class="middle">{{headerData.pageTitle}}</div>
		<div class="right" v-show="headerData.showRight">{{headerData.rightTitle}}</div>
	</div>
	<div v-show="headerData.showTab" class="nav-wrapper">
		<mt-navbar :fixed="false" class="page-part" :selected.sync="selected">
			<mt-tab-item v-bind:id="item.id"  v-for="item in tabList">{{item.tabName}}</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container :active.sync="selected">
			<mt-tab-container-item v-bind:id="item.id" v-for="item in tabList">
				<mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script type="text/babel">
    require("less/common/header.less");
	export default{

		props: ["headerData"],
		data(){
			return{
				tabList:[],
				selected:false
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