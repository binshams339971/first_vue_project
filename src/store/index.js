export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    getters: {
        getInventory(state) {
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        setInventory(state, item) {
            state.inventory = item
        },
        addToCart(state, item) {
            state.cart.push(item)
        },
        removeItem(state, item) {
            state.cart.splice(item, 1)
        },
        clearCart(state) {
            state.cart = []
        }
    }
}