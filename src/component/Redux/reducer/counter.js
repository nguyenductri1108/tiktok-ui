import { actionNames, increase, decrease } from '../actions/actions';

export const initState = {
    number: 1,
    reactLink: 'Abc.xyz',
};

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
