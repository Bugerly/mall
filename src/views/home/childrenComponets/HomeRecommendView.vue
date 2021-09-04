<template>
    <div class="recommend">
        <div v-for="item in recommend" :key="item.acm" class="item-recommend">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    //import引入的组件
    name:"HomeRecommendView",
    components: {},
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {

        };
    },
    //方法集合
    methods: {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
}
</script>
<style >
    .item-recommend{
        flex: 1;
    }
    .recommend{
        display: flex;
        text-align: center;
        font-size: 12px;

        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .item-recommend img{
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>