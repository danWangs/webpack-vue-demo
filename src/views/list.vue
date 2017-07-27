<template>
    <app-header :header-data="headerData"></app-header>
    <div class="pro-list-wrapper">
        <div class="pro-item flx-row" v-for="item in proList" v-link="{name:'pro_detail',params:{proId:item.proId}}">
            <div class="left-box">
                <img v-bind:src="item.proImg" alt="">
            </div>
            <div class="right-box">
                <p class="pro-name" v-text="item.proName"></p>
                <div class="second-line flx-row v-center flx-between">
                    <span class="pro-price" v-text="item.proPrice"></span>
                    <span class="btn-cart"><i class="iconfont">&#xe62f;</i></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    require("less/proList.less");
    export default{
        data(){
            return{
                headerData:{
                    pageTitle:"list",
                    showBack:true,
                    showRight:true,
                    showTab:false
                },
                proList:[]
            }
        },
        attached(){
            $.ajax({
                url:"http://localhost:9090/proList",
                success:(res)=>{
                    res.forEach((item)=>{
                        this.proList.push(item);
                    })
                }
            })
        }
    }
</script>