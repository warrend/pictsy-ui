import {combineReducers} from 'redux'
import imagesReducer from './imagesReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({ 
	gallery: imagesReducer,
	comments: commentsReducer
})

export default rootReducer;