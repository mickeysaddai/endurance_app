import usersReducer from "./users_reducer";
import ActivitiesReducer from "./activities_reducer";
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    activities: ActivitiesReducer
})

export default entitiesReducer;

