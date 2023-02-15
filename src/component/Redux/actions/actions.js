<<<<<<< HEAD
export const actions = {
    Increase : 'INCREASE',
    Decrease : 'DECREASE',
}

export const Increase = (state) =>{
    return{
=======
export const actionNames = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
};

export const Increase = (state) => {
    return {
>>>>>>> ca33d58c4d8a9ea1da93404e73b1a47acadb594a
        type: 'INCREASE',
        payload: state,
    };
};

export const Decrease = (state) => {
    return {
        type: 'DECREASE',
        payload: state,
    };
};
