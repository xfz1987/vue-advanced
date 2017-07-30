<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'I am home page'
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: normal;color: red;font-size: 24px;
}
.home{background:pink;}
</style>
