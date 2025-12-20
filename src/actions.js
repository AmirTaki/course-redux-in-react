export const  addUser = (name) => {
    return ({type : "ADDUSER", payload : name})
} 

export const  addProduct = (name) => {
    return ({type : "ADDPRODUCT", payload : name})
} 