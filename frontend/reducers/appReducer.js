/**
 * Reducer for managing local app state
 */
import { RECEIVE_ACTIVITIES, FETCHING_ACTIVITIES } from "../actions/activity_actions";


const initialState = {
    isFetchingActivities: false,
    areActivitiesLoaded: false
}

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_ACTIVITIES:
            return {
                ...state,
                isFetchingActivities: true
            }
        case RECEIVE_ACTIVITIES:
            return {
                ...state,
                isFetchingActivities: false,
                areActivitiesLoaded: true
            }
        default:
            return state
    }
}

export default AppReducer;