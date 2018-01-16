import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
	const ids = props.ids
	const id = props.id
	const findArrayIndex = (el) => { return el === id }
	const current = ids.findIndex(findArrayIndex)
	const nextId = (current + 1) % (ids.length)
	const next = ids[nextId]
	const getLast = (current) => {
		if (current - 1 < 0) {
			return ids[ids.length - 1]
		} else {
			return ids[current - 1]
		}
	}
	const last = getLast(current)
	return (
		<div>
			<Link to={process.env.PUBLIC_URL + '/images/' + last}><i aria-hidden="true" className="chevron left medium grey icon"></i></Link>
      <Link to={process.env.PUBLIC_URL + '/'}><i aria-hidden="true" className="grid layout medium icon"></i></Link>
      <Link to={process.env.PUBLIC_URL + '/images/' + next}><i aria-hidden="true" className="chevron right medium grey icon"></i></Link>
    </div>
	)
}

export default Navigation