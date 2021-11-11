import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const intialState = {
    id: null,
    username: null
}

const usersReducer = (state = intialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                ...state, 
                id: action.currentUser.id,
                username: action.currentUser.username
            }
        default:
            return state;
    }
};

export default usersReducer;
