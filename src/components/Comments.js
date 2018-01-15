import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

const Comments = (props) => {
  const comments = props.picture.comments
  if (comments.length === 0) {
    return (
      <Comment.Group>
        <Header as='h3' dividing>Comments</Header>
        <Comment>
          <Comment.Content>
            <Comment.Text>No comment yet...</Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    )
  } else {
    return (
      <Comment.Group>
        <Header as='h3' dividing>Comments</Header>
        {comments.map((comment, key) => {
          return (
          <Comment key={key}>
            <Comment.Avatar src={process.env.PUBLIC_URL + '/images/user.jpg'} />
            <Comment.Content>
              <Comment.Author as='a'>User</Comment.Author>
              <Comment.Metadata>
                <div>{comment.date}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.comment}</Comment.Text>
            </Comment.Content>
          </Comment>
          )
        })}
      </Comment.Group>
    )
  }
}

export default Comments