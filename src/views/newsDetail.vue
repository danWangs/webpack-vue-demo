<template>
    <app-header :header-data="headerData"></app-header>
    <div class="detail-wrapper">
        <div class="news-title" v-text="newsData.title"></div>
        <div class="news-content" v-text="newsData.content"></div>
    </div>
</template>
<script type="text/babel">
    require("less/news_detail.less");

    export default{
        data(){
            return {
                headerData: {
                    pageTitle: "详情",
                    showBack:true,
                    showRight:true,
                    showTab:false
                },
                newsData:{}
            }
        },
        methods:{
            load(){
                let self = this;
                $.ajax({
                    url:"http://localhost:9090/newsList",
                    data: self.newsData.newsId,
                    success: (res) => {
                        res.filter((item) => {
                            if(item.newsId === self.newsData.newsId){
                                self.newsData = item.newsDetail
                            }
                        })
                    }
                })
            }
        },
        created(){
            this.load()
        },
        route: {
            data(transition) {
                let self = this
                self.newsData.newsId = transition.to.params.newsId
            }
        }
    }
</script>