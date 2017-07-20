<template>
    <app-header :header-data="headerData"></app-header>
    <div class="edit-wrapper">
        <div class="btn-list">
            <button class="btn flx-row center" @click="add()"><i class="iconfont">&#xe62e;</i></button>
        </div>
        <ul class="form">
            <li v-for="item in msgList">
                <p>
                    <input :disabled="canEdit ? disabled : ''" type="text" v-bind:value="item.msg">
                    <input :disabled="canEdit ? disabled : ''" type="text" v-bind:value="item.msg">
                    <input :disabled="canEdit ? disabled : ''" type="text" v-bind:value="item.msg">
                    <button @click="del(item)">delete</button>
                    <button @click="edit($index)">edit</button>
                </p>
            </li>
        </ul>
    </div>
</template>
<script type="text/babel">
    export default{
        data(){
            return{
                headerData:{
                    pageTitle: "编辑行",
                    showBack:true,
                    showRight:true,
                    showTab:false
                },
                msgList:[],
                newMsg:{
                    index:'',
                    msg:''
                },
                canEdit:false
            }
        },
        methods:{
            load(){
                this.canEdit=false;
                $.ajax({
                    url:"http://localhost:9090/rowMsg",
                    success:(res)=>{
                        res.forEach((item)=>{
                            this.msgList.push(item)
                        })
                    }
                })
            },
            add(){
                this.msgList.push({
                    msg:this.newMsg.msg
                })
            },
            del(el){
                let r = confirm("确定删除此行吗？");
                if(r === true){
                    this.msgList.$remove(el);
                }
            },
            edit(index){
                this.canEdit = true;
                this.newMsg = this.msgList[index]
            }
        },
        created(){
            this.load()
        }
    }
</script>
<style scoped rel="stylesheet/less" lang="less">
    .edit-wrapper{
        .btn-list{
            padding: 10px;
            .btn{
                width: 100px;
                height: 36px;
                border: 1px solid #eee;
                background-color: #fff;
                border-radius: 3px;

                i{
                    font-size: 14px;
                    color: #666;
                }
            }
        }
        .form{
            padding: 10px;
            li{
                margin-top: 10px;
                input{
                    width: 25%;
                    height: 30px;
                    border: 1px solid #eee;
                    background-color: #fff;
                    text-align: center;
                }
                button{
                    padding-left: 5px;
                }
            }
        }
    }
</style>