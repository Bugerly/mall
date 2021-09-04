<template>
        <swiper>
        <swiper-item v-for="item in banners" :key="item.acm">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name:"HomeSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
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
</style>