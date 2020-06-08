<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Shop</a>
            <div class="basket-icon-nav" 
                @mouseover="hover = true">
                <a href="" class="basket-icon" id="basket-icon">
                    <svg class="bi bi-bag-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
                    </svg>
                    <span class="basket-quantity">{{itemsInCart}}</span>
                </a>  
                <Basket v-if="hover" @mouseleave.native="hover = false"/>
            </div>
      </div>
  </nav>

</template>

<script>

import { mapGetters } from 'vuex'
import Basket from './Basket'
export default {
    name: 'Nav',
    components: {
        Basket,
    },
    data() {
        return {
            hover: false,
        };
    },
    computed: {
        ...mapGetters({
            products: 'cartProducts'
        }),
        itemsInCart(){
            let cart = this.$store.getters.cartProducts;
            return cart.reduce((accum, item) => accum + item.quantity, 0)
        }
    }
}
</script>


<style scoped>
  .basket-icon-nav {
    position: relative;
  }

  .basket-quantity {
    margin-left: 5px;
  }

  .basket-icon {
    text-decoration: none;
    color:rgba(0,0,0,.9);
  }

</style>