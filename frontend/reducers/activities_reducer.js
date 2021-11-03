import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY } from "../actions/activity_actions";

const initialState = {
    "1": {
        "user_id": 1,
        "activity_type": "running",
        "distance": 3.20,
        "time": "12.30pm",
        "description": "running is life",
        "heartrate": 120,
        "duration": 30,
        "equipment_type": "none",
        "user": "mickey"
    },
    "2": {
        "user_id": 1,
        "activity_type": "running",
        "distance": 4.15,
        "time": "12.20pm",
        "description": "running is life",
        "heartrate": 120,
        "duration": 40,
        "equipment_type": "none",
        "user": "mickey"
    },
    "3": {
        "user_id": 1,
        "activity_type": "running",
        "distance": 3.28,
        "time": "12.30pm",
        "description": "Running is life",
        "heartrate": 120,
        "duration": 30,
        "equipment_type": "none",
        "user": "mickey"
    },
    "4": {
        "user_id": 1,
        "activity_type": "running",
        "distance": 4.02,
        "time": "12.20pm",
        "description": "Running is life",
        "heartrate": 120,
        "duration": 40,
        "equipment_type": "none",
        "user": "mickey"
    },
    "5": {
        "user_id": 1,
        "activity_type": "running",
        "distance": 5.31,
        "time": "12.20pm",
        "description": "Running is life",
        "heartrate": 120,
        "duration": 40,
        "equipment_type": "none",
        "user": "mickey"
    }
}

const ActivitiesReducer = (oldState = initialState, action) => {
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