import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  appReducer: reducer,
})

const initialState = {
  identity: '',
  isRoomHost: false,
}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// console.log(store.getState())

export default store
