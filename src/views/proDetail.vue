<template>
    <app-header :header-data="headerData"></app-header>
    <mt-tabbar :selected.sync="selected">
        <mt-tab-item id="外卖">
            <!--<img slot="icon" src="../assets/100x100.png">-->
            外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
            <!--<img slot="icon" src="../assets/100x100.png">-->
            订单
        </mt-tab-item>
        <mt-tab-item id="发现">
            <!--<img slot="icon" src="../assets/100x100.png">-->
            发现
        </mt-tab-item>
        <mt-tab-item id="我的">
            <!--<img slot="icon" src="../assets/100x100.png">-->
            我的
        </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container :active.sync="selected">
        <mt-tab-container-item id="外卖">
            <mt-cell v-for="n in 5" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
            <mt-cell v-for="n in 6" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
            <mt-cell v-for="n in 7" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
            <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
        </mt-tab-container-item>
    </mt-tab-container>
</template>
<script type="text/babel">
    export default{
        data(){
            return{
                headerData:{
                    pageTitle:"details",
                    showBack:true,
                    showRight:true,
                    showTab:false
                },
                proData:{},
                selected:'外卖'
            }
        },
        route: {
            data(transition) {
                let self = this
                self.proData.proId = transition.to.params.proId
            }
        }
    }
</script>