<<<<<<< HEAD
import { Abc } from "@mui/icons-material";
import * as action from '../actions/actions'
=======
import { actionNames, increase, decrease } from '../actions/actions';
>>>>>>> ca33d58c4d8a9ea1da93404e73b1a47acadb594a

export const initState = {
    number: 1,
    reactLink: 'Abc.xyz',
};

<<<<<<< HEAD
const reuducerCounter = (state = initState, action)=>{
    switch(action.type){
        case action.actions.Increase:{
            return {
                ...state,
                number: state.number + 1
            }
        }

        case action.actions.Decrease:{
            return{
                ...state,
                number: state.number - 1
            }
        }

        default: return state
    }
}

export default reuducerCounter
=======
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionNames.increase: {
            return {
                ...initState,
                number: state.number + 1,
            };
        }
        case actionNames.decrease: {
            return {
                ...initState,
                number: state.number - 1,
            };
        }

        default:
            return state;
    }
};
>>>>>>> ca33d58c4d8a9ea1da93404e73b1a47acadb594a
