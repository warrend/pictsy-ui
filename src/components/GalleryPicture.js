import React from 'react'
import { Link } from 'react-router-dom'
import './GalleryPicture.css'

const GalleryPicture = (props) => {
	const { id, description, comments, metadata } = props.img
	return (
		<div class="picture">
      <Link to={`/images/${id}`}>
        <img src={process.env.PUBLIC_URL + '/images/' + id + '.jpg'} alt={description} />
        <div className="overlay">
	    		<div className="text">
	    			<p>{description}</p>
	    			<p><i aria-hidden="true" className="comment circular inverted small red icon"></i>{comments.length}</p>
	    			<small>Tag: {metadata}</small>
	    		</div>
	  		</div>
      </Link>
    </div>
	)
}

export default GalleryPicture