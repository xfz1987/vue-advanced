<template>
  <div class="product">
  	<p>this is product page</p>
<!--     <ol>
      <li><router-link to="/product/pro1">product-1</router-link></li>
      <li><router-link to="/product/pro2">product-2</router-link></li>
    </ol> -->
    <pre><code>{{ JSON.stringify($route.params) }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'product'
}
</script>
<style scoped>
h1{
  font-weight: normal;color: #fff;font-size: 24px;
}
.product{background:red;}
</style>
