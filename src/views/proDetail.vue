<template>
    <app-header :header-data="headerData"></app-header>
    <div id="slider">

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
        route: {
            data(transition) {
                let self = this
                self.proData.proId = transition.to.params.proId
            }
        }
    }
</script>