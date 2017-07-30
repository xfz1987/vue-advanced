<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
<!--     <router-view class="page" name="left" style="float:left;width:50%;background:orange;height:300px;"></router-view>
    <router-view class="page" name="right" style="float:left;width:50%;background:#ff6606;height:300px;"></router-view>
 -->   
  <!-- <navbar></navbar> -->
  <!-- <navbar2></navbar2> -->
  <navbar3></navbar3>
  </div>
</template>
<script>
// import Navbar from '@/components/Navbar';
// import Navbar2 from '@/components/Navbar2';
import Navbar3 from '@/components/Navbar3';

export default {
  name: 'app',
  // components: {'navbar':Navbar}
  // components: {'navbar2':Navbar2}
  components: {'navbar3':Navbar3}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
