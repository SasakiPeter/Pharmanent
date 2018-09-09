// action type
const INCREMENT = 'COUNTER_INCREMANT';
const DECREMENT = 'COUNTER_DECREMENT';

const initialState = {
    count: 0
}

// reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

// action-creator
export const increment = () => {
    return { type: INCREMENT };
}

export const decrement = () => {
    return { type: DECREMENT };
}