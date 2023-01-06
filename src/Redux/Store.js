import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk                                           from 'redux-thunk'
import oressionReducer                                 from "./reducers/Reducer";

const rootReducer       = combineReducers({oression:oressionReducer,});
const oressionStore     = createStore(rootReducer,applyMiddleware(thunk));
export default oressionStore;