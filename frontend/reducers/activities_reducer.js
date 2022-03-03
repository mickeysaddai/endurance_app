import { RECEIVE_ACTIVITIES, RECEIVE_ACTIVITY, REMOVE_ACTIVITY, RECEIVE_COMMENT, RECEIVE_LIKE } from "../actions/activity_actions";

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
        "user": "mickey",
        "comments": []
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
        case RECEIVE_COMMENT:
            const currentActivity = nextState[action.comment.activityId];
            currentActivity.comments.push(action.comment)
            nextState[action.comment.activityId] = currentActivity
            return nextState;
        case RECEIVE_LIKE:
            const currActivity = nextState[action.like.activityId]
            currActivity.likes.push(action.like)
            nextState[action.like.activityId] = currActivity;
            return nextState;
        
        default:
            return oldState;
    }

}

export default ActivitiesReducer;