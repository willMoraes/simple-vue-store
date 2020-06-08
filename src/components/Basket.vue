<template>
    <div id="basket-box" class="basket-box arrow-top-right">
        <ul class="basket-box-list list-group">
            <li v-for="product in products" :key="product.id" class="list-group-item">
                <span class="basket-li-title">{{product.title}}</span>
                <span class="basket-li-qt">Quantidade: {{product.quantity}}</span>
                <span class="basket-li-price">{{product.price * product.quantity | formatMoney}}</span>
                <a href="#" @click="removeFromCart(product)" class="basket-li-delete text-danger" >
                    <svg class="bi bi-x" width="100%" height="100%" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="basket-bottom">
            Total: {{total | formatMoney}}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Basket',
    computed: {
        ...mapGetters({
            products: 'cartProducts'
        }),
        total () {
            return this.products.reduce((total, p) => {
                return total + p.price * p.quantity
            }, 0)
        },        
    },
    methods: mapActions([
        'removeFromCart'
    ])
    
}
</script>

<style scoped>

    .basket-box {
        position: absolute;
        top: 2em;
        right: 0;
        min-width: 15em;
        z-index: 100;
    }

    .list-group-item {
        position: relative;
    }

    .basket-li-title {
        display: block;
    }

    .basket-li-qt {
        font-size: .875em;
        line-height: 1.3;
        float: left;
        color: #999;
    }

    .basket-li-price {
        color: #333;
        line-height: 1.2;
        float: right;
        margin-right: 2em;
    }

    .basket-li-delete {
        width: 1.5em;
        position: absolute;
        right: 1em;
        top: 50%;
        transform: translateY(-50%);
    }

    .basket-bottom {
        padding: .875em;
        background: #f2f2f2;
        border-top: 1px solid #e5e5e5;
        border-radius: 0;
        text-align: left;
        overflow: hidden;
    }
</style>