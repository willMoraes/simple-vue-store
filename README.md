# Shop-vue

Projeto de uma cesta de compras construido com Vue e Vuex.


### How cart works

- Products can be added to the cart if they have an item available on stock.
- Products added to the cart must be removable.
- Checkout must be disabled if cart **total** is over user **limit**.
- If a product already exists on the cart, its counter should be updated.
- All products have a shipping price. **shipping** is defined by the highest shipping price of products added to cart.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
