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
    }
}


// console.log(store.state)

store.dispatch({type: "ADD-TO-CART", payload: "apple"})
console.log(store.getState())