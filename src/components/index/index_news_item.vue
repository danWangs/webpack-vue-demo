<template>
    <div class="new-list-item" v-link="{name:'news_details',params:{newsId:item.newsId}}" v-for="item in newsList">
        <p class="flx-row flx-between">
            <span class="title" v-text="item.newsTitle"></span>
            <span class="date" v-text="item.newsDate"></span>
        </p>
        <p class="sub-title" v-text="item.newsSubTitle"></p>
</div>
</template>

<script type="text/babel">
    require("less/common/common.less");
    export default{
        props:["newsList"]
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .new-list-item{
        border-bottom: 1px solid #eee;
        background-color: #fff;
        padding: 10px;
        &:first-child{
            border-top: 1px solid #eee;
        }
        .title{
            flex: 1;
            font-size: 14px;
            padding-bottom: 7px;
            color: #555;
        }
        .date{
            width: 80px;
            font-size: 12px;
            color: #999;
            text-align: right;
        }
        .sub-title{
            font-size: 12px;
            color: #666;
        }
    }
</style>