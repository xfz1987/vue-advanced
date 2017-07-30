<template>
  <div class="pro1">
    <h1>{{ msg }}, id为{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'pro1',
  data () {
    return {
      msg: 'I am pro1 page'
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: normal;color: red;font-size: 24px;
}
</style>
