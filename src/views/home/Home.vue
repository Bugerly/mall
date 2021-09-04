<template>
    <div id="home">
      <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature></feature>
      <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
      <ul>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ul>
    </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childrenComponets/HomeSwiper.vue'
import HomeRecommendView from './childrenComponets/HomeRecommendView.vue'
import Feature from './childrenComponets/Feature.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'

import {getHomeMultaDate} from 'network/home'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    Feature,
    TabControl,
  },
  data(){
    return{
      banners:[],
      dkeyword:[],
      keywords:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultaDate().then(res=>{
      this.banners = res.data.banner.list;
      //this.dkeyword = res.data.dkeyword.list;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list;
      console.log(res.data);
    })
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .tab-control{
    position: sticky;
    top:44px;
  }
  .home-bar{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }
</style>
