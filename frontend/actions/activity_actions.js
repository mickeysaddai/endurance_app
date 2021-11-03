import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_WORKOUT';


export const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES, 
    activities
})

export const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITIES, 
    activity
})
export const removeActivity = activityId => ({
    type: RECEIVE_ACTIVITIES, 
    activityId
})



export const fetchActivities = () => dispatch => (
    APIUtil.fetchActivities().then(activities => (
        dispatch(receiveActivities(activities))
    ))
);

export const fetchActivity = (id) => dispatch => (
    APIUtil.fetchActivities(id).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);
export const createActivity = (activity) => dispatch => (
    APIUtil.createActivity(activity).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);

export const updateActivity = (activity) => dispatch => (
    APIUtil.updateActivity(activity).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);

export const deleteeActivity = (activityId) => dispatch => (
    APIUtil.deleteActivity(activityId).then(() => (
        dispatch(removeActivity(activityId))
    ))
);


