export const fetchActivities = () => {
    return (
        $.ajax({
            method: 'GET',
            url: '/api/activities',
    })
    )
}
export const fetchActivity = (id) => {
    return (
        $.ajax({
            method: 'GET',
            url: `api/activities/${id}`,
    })
    )
}

export const createActivity = (activity) => {
    return (
        $.ajax({
            method: 'POST',
            url: `api/activities/`,
            data: {activity}
    })
    )
}
export const updateActivity = (activity) => {
    debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/activities/${activity.id}`,
            data: {activity}
    })
    )
}
export const deleteActivity = (activityId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `api/activities/${activityId}`,
    })
    )
}

export const createComment = (comment) => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/activities/${comment.activity_id}/comments`,
            data: {comment}
            
        })
    )
}
export const createLike = (like) => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/activities/${like.activity_id}/likes`,
            data: {comment}
            
        })
    )
}