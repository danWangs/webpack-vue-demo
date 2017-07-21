<template>
    <app-header :header-data="headerData"></app-header>
    <div class="cart-wrapper">
        <div class="sub-title">cart<span class="cart-num">（0）</span></div>
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
                }
            }
        }
    }
</script>