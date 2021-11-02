import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../actions/activity_actions";


const ActivitiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities;

        case RECEIVE_ACTIVITY:
            nextState[action.activity.id] = action.activity
            return nextState;
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId]
            return nextState;
        
        default:
            return oldState;
    }

}

export default ActivitiesReducer;