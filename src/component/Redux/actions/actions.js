export const Increase = (state) =>{
    return{
        type: 'INCREASE',
        payload: state
    }
}

export const Decrease = (state) =>{
    return{
        type: 'DECREASE',
        payload: state
    }   
}