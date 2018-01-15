import {combineReducers} from 'redux';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({ 
	gallery: imagesReducer
})

export default rootReducer;