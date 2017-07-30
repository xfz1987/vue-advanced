<template>
  <div class="detail">
    <h1>{{ msg }}</h1>
    <p>{{ JSON.stringify($route.params) }}</p>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'I am detail page'
    }
  }
}
</script>
<style scoped>
h1{
  font-weight: normal;color: red;font-size: 24px;
}
.detail{background:#eee;}
</style>
