import { Abc } from "@mui/icons-material";
import * as action from '../actions/actions'

export const initState = {
    number : 1,
    reactLink: 'Abc.xyz'
}

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