import fetch from 'isomorphic-fetch';

export function addComment(comment) {
  return function(dispatch) {
    dispatch({
    	type: 'ADD_COMMENT', 
    	payload: comment
    })
  }
} 

export function fetchImages() {
  return function(dispatch) {
    return fetch(
    'https://api.imgur.com/3/album/vx1Zn/images/', {
    	method: 'GET',
    	headers: {
    		Authorization: 'Client-ID 716e0003e64c2ff'
    	}
    })
      .then(res => res.json())
      .then(images => dispatch({type: 'FETCH_IMAGES', payload: images.data}))
  }
}