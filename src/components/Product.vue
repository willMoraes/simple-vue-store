<template>
  <div class="container mt-4 " style="width: 50rem;">
    <h1>Produtos</h1>
    <h6>{{length}} Produtos</h6>
    <div class="row card-deck">
          <div v-for="product in products" :key="product.id" class="card" >
            <img class="card-img-top " src="https://br.vuejs.org/images/logo.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title mb-0">{{product.title}}</h5>
              <p class="card-text">{{product.description}}</p>
              <p class="card-price mb-0">{{product.price | formatMoney}}</p>

              <p v-if="product.inventory > 0" class="card-inventory">Restam {{product.inventory}} </p>
              <p v-if="product.inventory <= 0" class="card-inventory">Desculpe, estamos sem estoque. </p>

              <button type="button" class="btn btn-primary"
                :disabled="!product.inventory"
                @click="addToCart(product)">
                Comprar
              </button>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Product',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-text {
      height: 4rem;
  }

  .card-price {
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-weight: bold;
  }

  .card-inventory {
    font-size: 14px;
    color: rgb(102, 102, 102);
  }
</style>
