<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="vuex-1">
      <h1>hello Vuex</h1>
      <p>{{ $store.state.count }} = {{_count}}</p>
      <p>{{ num }}</p>
      <p>
        <button @click="$store.commit('add')">add</button>
        <button @click="struc">struc</button>
      </p>
      <p>
        <button @click="addPlus">addPlus</button>
      </p>
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  name : 'app',
  // components: {'navbar3':Navbar3}
  data(){
    return {
      count : 0 
    }
  },
  // computed : {
  //   _count(){
  //     this.count = this.$store.state.count
  //     return this.$store.state.count;
  //   }
  // }
  computed : {
    ...mapState({
     _count: state => state.count
    }),
    // _count(){
    //   return this.$store.getters.count;
    // }
    ...mapGetters([
      'num'
    ])
  },
  // methods : mapMutations([
  //   'add',
  //   'struc' 
  // ]),
  methods: {
    ...mapMutations(['add','struc']),
    ...mapActions(['addPlus'])
  }
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
