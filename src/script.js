// store
const store = {
    state : {
        cart: [], show: []
    },

   
    getState (){
        return this.state
    },

    // method dispatch
    dispatch(action) {
      this.state =  reducer(this.state, action)
    }
}

// reducer
function reducer (state, action) {
    switch(action.type){
        case "ADD-TO-CART":
            // state new 
            return {...state, cart : [
                ...state.cart,
                action.payload
            ]}
        
        case "REMOVE-FROM-CART":
            // state new
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

// action 
store.dispatch(addToCart('lenove'))
store.dispatch(addToCart('asus'))
store.dispatch(removeFromCart('lenove'))

console.log(store.getState())



