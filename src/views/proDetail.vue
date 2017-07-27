<template>
    <app-header :header-data="headerData"></app-header>
    <group>
        <!--<cell title="title" value="value"></cell>-->
    </group>
</template>
<script type="text/babel">
    import Group from 'vux'
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
        },
        components:{
            Group
        }
    }
</script>