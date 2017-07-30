<template>
  <div class="unknow">
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: 'unknow',
  beforeRouteEnter: (to,from,next) => {
    console.log(to);
    console.log(from);
    next()
  },
  beforeRouteLeave: (to,from,next) => {
    console.log(to);
    console.log(from);
    next()
  },
}
</script>
<style scoped>
h1{
  font-weight: normal;color: red;font-size: 50px;text-align: center;
}
</style>
