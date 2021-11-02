import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../actions/activity_actions";


const ActivitiesReducer = (oldState, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities

        
        default:
            break;
    }

}

export default ActivitiesReducer;