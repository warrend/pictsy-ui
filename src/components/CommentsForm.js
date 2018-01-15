import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const CommentsForm = (props) => {
	return (
		<Form onSubmit={props.handleSubmit} reply>
	    <Form.TextArea placeholder='Your comment...' value={props.state.comment} onChange={props.handleChange} name="comment"/>
	    <Button content='Add Reply' labelPosition='left' icon='edit' color='black' />
	  </Form>
  )
}

export default CommentsForm