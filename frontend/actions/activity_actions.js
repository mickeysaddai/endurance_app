import * as APIUtil from '../util/activity_api_util';

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_WORKOUT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const FETCHING_ACTIVITIES = 'FETCHING_ACTIVITIES'


export const receiveActivities = activities => ({
    type: RECEIVE_ACTIVITIES, 
    activities
})

export const receiveActivity = activity => ({
    type: RECEIVE_ACTIVITY, 
    activity
})
export const removeActivity = activityId => ({
    type: REMOVE_ACTIVITY, 
    activityId
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT, 
    comment
})
export const receiveLike = like => ({
    type: RECEIVE_LIKE, 
    like

})



export const fetchActivities = () => dispatch => {
   // TODO : "update reudcer"
    dispatch({
        type: FETCHING_ACTIVITIES,
    })
    return APIUtil.fetchActivities().then(activities => (
        dispatch(receiveActivities(activities))
    ))
};

export const fetchActivity = (id) => dispatch => (
    APIUtil.fetchActivity(id).then(activity => (
        dispatch(receiveActivity(activity))
    ))
);
export const createActivity = (activity) => dispatch => {
    return APIUtil.createActivity(activity).then(activity => {
       return dispatch(receiveActivity(activity))
    })
}

export const updateActivity = (activity) => dispatch => {
    return  APIUtil.updateActivity(activity).then(activity => {
    
            return (
                dispatch(receiveActivity(activity))
    )

        })
            
}



export const deleteActivity = (activityId) => dispatch => (
    APIUtil.deleteActivity(activityId).then(() => (
        dispatch(removeActivity(activityId))
    ))
);


export const createAComment = (comment) => dispatch => {
    dispatch(receiveComment(comment))
    const newComment = {
        person_id: comment.userId,
        activity_id: comment.activityId,
        body: comment.body
    }
    return APIUtil.createComment(newComment).then(comment =>  console.log(comment)
    )
}

export const createALike = (like) => dispatch => {
    dispatch(receiveLike(like))
    const newLike = {
        user_id: like.userId,
        activity_id: like.activityId,
        countlwe: like.count

    }
    return APIUtil.createLike(newLike).then(newLike =>  console.log("LIKE", newLike)
    )
}


