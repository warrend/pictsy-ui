export function addComment(comment, id) {
  return function(dispatch) {
    dispatch({
    	type: 'ADD_COMMENT', 
    	payload: {comment, id}
    })
  }
} 