// export const Request = () => {
//     return {type : 'REQUEST'}
// }

// export const Success = (data) => {
//     return {type: 'SUCCESS', payload: {data}}
// }

// export const Failure = (error) => {
//     return {type: 'FAILURE', payload : {error}}
// }


const apiAction = () => {
    return (dispatch) => {
        dispatch({type : 'REQUEST'})

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                dispatch({type : "SUCCESS", payload : {data}})
            })
            .catch((error) => {
                dispatch({type : "FAILURE", payload: {error}})
            })  
          
    }
}

export default apiAction