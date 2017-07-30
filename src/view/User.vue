<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params }}</p>
    <p>{{ $route.query }}</p>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'I am User page'
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: normal;color: red;font-size: 24px;
}
</style>
