<template>
  <div class="navbar2">
    <ul>
      <li :class="{cur:tabIndex==0}" @click="changeTab(0)"><router-link to="/">首页</router-link></li>
      <li :class="{cur:tabIndex==1}" @click="changeTab(1)"><router-link to="/Users">Users</router-link></li>
        <ul>
          <li :class="{curChild:tabIndex==1&&cIndex==0}" @click="changeTab(1,0)"><router-link :to="{path:'users/xfz',query:{aaa:'bbb'}}">xfz</router-link></li>
          <li :class="{curChild:tabIndex==1&&cIndex==1}" @click="changeTab(1,1)"><router-link to="back">返回首页</router-link></li>
        </ul>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navbar2',
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
.navbar2{position: fixed;left: 0;top: 50px;background-color: #fff;}
.navbar2 li.cur{background-color: red;}
.navbar2 li.curChild{background-color: #ddd;}
.navbar2 li a{display: block;width:100%;color:#000;}
p{margin-top: 20px;}
</style>
