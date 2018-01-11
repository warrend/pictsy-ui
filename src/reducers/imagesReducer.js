export default function imagesReducer(state = [], action) {
  switch ( action.type ) {
    case 'ADD_COMMENT':
      return action.payload
    default: 
      return state;
   }
}
