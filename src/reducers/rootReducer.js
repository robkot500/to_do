import positionReducer from './positionReducer'
import itemReducer from './itemReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    position: positionReducer,
    item: itemReducer
});


export default rootReducer