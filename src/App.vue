<template>
    <div>
        <Nav></Nav>
        <Product></Product>
    </div>
</template>

<script>
import Nav from './components/Nav';
import Product from './components/Product';

export default {
  name: 'App',
  components: {
    Nav,
    Product
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
