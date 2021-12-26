import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    app: AppReducer
})

export default rootReducer;
