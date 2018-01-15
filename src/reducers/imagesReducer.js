export default function imagesReducer(state = [], action) {
  switch ( action.type ) {
    case 'ADD_COMMENT':
      return Object.assign(
        [...state], 
        {[action.payload.id]:
          Object.assign(
          	{}, 
          	state[action.payload.id], 
          	{comments: state[action.payload.id].comments.concat(action.payload.comment)}
          )
        })
    case 'UPDATE_DATA':
    	return action.payload
    default: 
      return state;
   }
}
