import React from 'react'
import { Link } from 'react-router-dom'
import './GalleryPicture.css'

const GalleryPicture = (props) => {
	const { id, description, link } = props.img
	const comments = props.comments.filter(comment => comment.id === id)
	return (
		<div class="picture">
      <Link to={`/images/${id}`}>
        <img src={link} alt={description} />
        <div className="overlay">
        	<div className="text">
        		<p>{description}</p>
        		<p><i aria-hidden="true" className="comment circular inverted small red icon"></i>{comments.length}</p>
        	</div>
        </div>
      </Link>
    </div>
	)
}

export default GalleryPicture