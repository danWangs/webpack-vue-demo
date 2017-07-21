<template>
    <app-header :header-data="headerData"></app-header>
    <div class="pro-detail-wrapper">
        <div class="slide">

        </div>
    </div>
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
                proData:{}
            }
        },
        route:{
            data(transition) {
                let self = this
                self.proData.proId = transition.to.params.proId
            }
        }
    }
</script>