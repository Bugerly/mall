<template>
    <div class="tab-control">
        <div v-for="(item ,index) in titles" :key="index"
             class="tab-control-item" :class="{active:index === currentIndex}"
             @click="change(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    //import引入的组件
    components: {},
    data() {
        return {
            currentIndex: 0
        };
    },
    //方法集合
    methods: {
        change(index){
            this.currentIndex = index
        }
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
}
</script>
<style >
 .tab-control{
     display: flex;
     text-align: center;
     font-size: 15px;
     height: 40px;
     line-height: 40px;
     background-color: #fff;
 }
 .tab-control-item{
     flex: 1;
 }
 .tab-control-item span{
     padding: 5px;
 }
 .active{
     color: var(--color-high-text);
     
 }
 .active span {
    border-bottom: 3px solid var(--color-tint);
 }
</style>