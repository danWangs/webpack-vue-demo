<template>
    <app-header :header-data="headerData"></app-header>
    <div class="cart-wrapper">
        <div class="sub-title">cart<span class="cart-num">（{{cartNum}}）</span></div>
        <div></div>
        <div class="group">
        	<span class="minus" @click="minus()">-</span>
        	<input class="num" v-model="cartNum" />
        	<span class="plus" @click="plus()">+</span>
        </div>
    </div>
</template>
<script type="text/babel">
require("less/cart.less")
export default{
    data(){
        return{
            headerData:{
                pageTitle:"cart",
                showBack:true,
                showRight:true,
                showTab:false
            },
            cartNum:0
        }
    },
    methods:{
    minus(){
		if(this.cartNum>0){
			this.cartNum--;
		}
	},
	plus(){
		this.cartNum++;
	}
  }
}
</script>