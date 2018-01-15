import React from 'react'
import { Link } from 'react-router-dom'

const GalleryPicture = (props) => {
	return (
		<div>
      <Link to={process.env.PUBLIC_URL + '/images/' + props.back}><i aria-hidden="true" className="chevron left medium grey icon"></i></Link>
      <Link to={process.env.PUBLIC_URL + '/'}><i aria-hidden="true" className="grid layout medium icon"></i></Link>
      <Link to={process.env.PUBLIC_URL + '/images/' + props.forward}><i aria-hidden="true" className="chevron right medium grey icon"></i></Link>
    </div>
	)
}

export default GalleryPicture