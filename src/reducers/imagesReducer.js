export default function imagesReducer(state = [], action) {
  switch ( action.type ) {
    case 'FETCH_IMAGES':
      return action.payload
    default: 
      return state;
   }
}