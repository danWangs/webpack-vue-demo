<template>
    <app-header :header-data="headerData"></app-header>
    <div class="detail-wrapper">
        <div class="news-title"></div>
    </div>
</template>
<script type="text/babel">
    export default{
        data(){
            return {
                headerData: {
                    pageTitle: "详情",
                    showBack:true,
                    showRight:true,
                    showTab:false
                }
            }
        },
        methods:{

        }
    }
</script>