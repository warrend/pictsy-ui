import {combineReducers} from 'redux';
import imagesReducer from './imagesReducer';
import searchTermReducer from './searchTermReducer'

const rootReducer = combineReducers({ 
	images: imagesReducer,
	searchTerm: searchTermReducer
})

export default rootReducer;