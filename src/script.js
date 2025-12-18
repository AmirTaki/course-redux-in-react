const store = {
    state : {
        cart: [], show: []
    },

    // view
    getState (){
        return this.state
    },

    // update
    dispatch(action) {
        if(action.type === "ADD-TO-CART"){
            this.state.cart.push(action.payload)       
        }
        else if (action.type === 'REMOVE-FROM-CART'){
            this.state.cart.pop()
        }
    }
}

function addToCart(product) {
    return {type: "ADD-TO-CART", payload: product}
}

function removeFromCart(product){
    return {type: "REMOVE-FROM-CART", payload: product}
}

store.dispatch(addToCart('lenove'))
store.dispatch(removeFromCart('lenove'))

console.log(store.getState())