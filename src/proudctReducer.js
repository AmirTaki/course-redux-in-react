const productReudcer = (state = [], action) => {
    switch(action.type) {
        case "ADDPRODUCT":
            return [...state, action.payload];
        
        default: 
            return state;
    }
}
export default productReudcer;