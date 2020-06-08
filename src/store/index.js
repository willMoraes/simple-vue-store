import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
    added: [],
    all: [
        { 'id': 1, 'title': 'iPad 4 Mini', description: 'Lorem ipsum dolor sit amet', 'price': 500.01, 'inventory': 2, 'shipping': 15.00 },
        { 'id': 2, 'title': 'iPhone 7 128GB', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'price': 10.99, 'inventory': 1, 'shipping': 5.00 },
        { 'id': 3, 'title': 'Iphone XR', description: 'Lorem ipsum dolor..', 'price': 19.99, 'inventory': 3, 'shipping': 22.50 },
    ]
}

// getters
const getters = {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all) ? state.all.length : 0,
    cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
            const product = state.all.find(p => p.id === id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity
            }
        })
    }
}

// actions
const actions = {
    addToCart({ commit }, product) {
        if (product.inventory > 0) {
            commit('ADD_TO_CART', { id: product.id })
        }
    },

    removeFromCart({ commit }, product) {        
        commit('REMOVE_FROM_CART',  product)
    }
}

// mutations
const mutations = {
    ADD_TO_CART(state, { id }) {
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({id,quantity: 1})
        } else {
            record.quantity++
        }

        state.all.find(product => product.id === id).inventory--
    }, 

    REMOVE_FROM_CART(state, removedItem) {
        const index = state.added.findIndex(added => added.id === removedItem.id)
        state.added
        .splice(index, 1)
        state.all
        .find(product => product.id === removedItem.id)
        .inventory += removedItem.quantity
    },
}
// one store for entire application
export default new Vuex.Store({
    state,
    strict: debug,
    getters,
    actions,
    mutations
})




