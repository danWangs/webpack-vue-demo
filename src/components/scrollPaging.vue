<template>
    <div class="scroll-wrapper">
        <inline-loading :show="showBottomLoading"></inline-loading>
    </div>
</template>
<script type="text/babel">
    export default{
        props:["loadData","pageIndex","pageSize"],
        data(){
            return{
                scroll:true,
                totalCount:0
            }
        },
        computed:{
            totalPage(){
                return this.totalCount/this.pageSize
            },
            showBottomLoading(){
                return !this.scroll && this.pageIndex > 0
            }
        },
        attached(){
            this.loadMore(true);
            $(window).on('scroll', () => {
                this.loadMore(false);
            });
        },
        detached(){
            $(window).off('scroll');
        },
        methods:{
            loadMore(isFirstLoading){
                if(this.scroll&&(isFirstLoading||this.pageIndex!==this.totalPage)){
                    let totalHeight = parseFloat($(window).height())+parseFloat($(window).scrollTop());
                    if(isFirstLoading||$(document).height<=totalHeight+100){
                        this.scroll = false;
                        if(this.pageIndex===0){
                            console.log("loading")
                        }
                        this.loadData((res)=>{
                            if(res){
                                this.pageIndex = res.pageIndex+1;
                                this.totalCount = res.recordsCount
                            }
                            this.scroll=true;
                            console.log("hide loading")
                        })
                    }
                }
            },
            reset(){
                this.pageIndex= 0;
                this.totalCount = 0;
                $(window).scrollTop(0);
                this.loadMore(true);
            }
        },
        components:{
            "inline-loading": require('component/inline-loading.vue')
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .fountainG {
        position: relative;
        width: 72px;
        height: 9px;
        margin: auto;
        left: 0;
        right: 0;
        bottom: -12px;
        top: inherit;
    }
    .scroll-wrapper{
        height: 30px;
    }
</style>