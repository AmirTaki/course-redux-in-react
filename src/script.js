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
      this.state =  reducer(this.state, action)
    }
}


function reducer (state, action) {
    switch(action.type){
        case "ADD-TO-CART":
            return {...state, cart : [
                ...state.cart,
                action.payload
            ]}
        
        case "REMOVE-FROM-CART":
            return {...state, cart: [
                ...state.cart.filter((item) => item !== action.payload )
            ]}
        
        default: 
            return {state}
    }
}

function addToCart(product) {
    return {type: "ADD-TO-CART", payload: product}
}

function removeFromCart(product){
    return {type: "REMOVE-FROM-CART", payload: product}
}

store.dispatch(addToCart('lenove'))
store.dispatch(addToCart('asus'))
store.dispatch(removeFromCart('lenove'))

console.log(store.getState())



