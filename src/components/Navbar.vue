<template>
  <div class="navbar">
    <ul>
      <li :class="{cur:tabIndex==0}" @click="changeTab(0)"><router-link to="/">首页</router-link></li>
      <li :class="{cur:tabIndex==1}" @click="changeTab(1)"><router-link to="/product/fuck/you">产品</router-link></li>
         <ul>
           <li :class="{curChild:tabIndex==1&&cIndex==0}" @click="changeTab(1,0)"><router-link to="/product/pro1/222">产品1</router-link></li>
           <li :class="{curChild:tabIndex==1&&cIndex==1}" @click="changeTab(1,1)"><router-link to="/product/pro2">产品2</router-link></li>
           <li :class="{curChild:tabIndex==1&&cIndex==2}" @click="changeTab(1,2)"><router-link to="topro1/333">跳到产品1</router-link></li>
           
          <!--  <li :class="{curChild:tabIndex==1&&cIndex==0}" @click="changeTab(1,0)"><router-link :to="{ name:'pro1Page',params: {id:123} }">产品1</router-link></li>
           <li :class="{curChild:tabIndex==1&&cIndex==1}" @click="changeTab(1,1)"><router-link :to="{ name:'pro2Page',params: {id:321} }">产品2</router-link></li> -->
         </ul>
      <li :class="{cur:tabIndex==2}" @click="changeTab(2)"><router-link to="/detail/123">介绍</router-link></li>
      <li :class="{cur:tabIndex==3}" @click="changeTab(3)"><router-link to="/ccc/001">toHome</router-link></li>
      <li :class="{cur:tabIndex==4}" @click="changeTab(4)"><router-link to="/ccc/002">toDetail</router-link></li>
      <li :class="{cur:tabIndex==5}" @click="changeTab(5)"><router-link to="/gogo">gogo</router-link></li>
      

    </ul>
    <p>{{ $route.name }}</p>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data(){
    return { tabIndex: 0, cIndex: -1 };
  },
  methods: {
    changeTab(n,m){
      this.tabIndex = n;
      this.cIndex = m !== undefined ? m : -1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0;}
h1{
  font-weight: normal;
}
a{text-decoration: none;}
.navbar{position: fixed;left: 0;top: 50px;background-color: #fff;}
.navbar li.cur{background-color: red;}
.navbar li.curChild{background-color: #ddd;}
.navbar li a{display: block;width:100%;color:#000;}
p{margin-top: 20px;}
</style>
