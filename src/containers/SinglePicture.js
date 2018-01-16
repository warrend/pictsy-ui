import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imagesActions'
import Comments from '../components/Comments'
import CommentsForm from '../components/CommentsForm'
import Navigation from '../components/Navigation'
import dateFormat from 'dateformat'
import { Comment } from 'semantic-ui-react'
import './SinglePicture.css'

class SinglePicture extends Component {
  constructor() {
    super();

    this.state = {
      comment: '',
      date: this.createDate()
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const id = this.props.match.params.id
    const newComment = {
      id: id,
      comment: this.state.comment,
      date: this.state.date
    }
    this.props.actions.addComment(newComment)
    this.setState({  comment: '' })
  }

  createDate() {
    let now = new Date()
    return dateFormat(now, "m/d/yy @h:MMtt")
  }

  back = (id) => {
    if ((parseInt(id, 10) - 1) < 0) {
      return this.props.gallery.length - 1
    } else {
      return (parseInt(id, 10) - 1)
    }
  }

  render() {
    const id = this.props.match.params.id
    const picture = Object.assign({}, this.props.gallery.find(img => img.id === id))
    const comments = this.props.comments.filter(comment => comment.id === id)
    const ids = this.props.gallery.map(img => img.id)
    return (
      <div className="single">
        <header className="container">
          <Link to={process.env.PUBLIC_URL + '/'}><h1><i aria-hidden="true" className="empty star small red icon"></i>Pictsy</h1></Link>
        </header>
        <div class="container-img">
          <img src={'https://i.imgur.com/' + id + '.jpg'} alt={picture.description} />
          <p className="img-description">{picture.description} / <i aria-hidden="true" className="comment circular inverted small red icon"></i>{comments.length}</p>
          <Navigation id={id} ids={ids} />
        </div>
        <Comment.Group className="container-comments">
          <Comments comments={comments} />
          <CommentsForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} /> 
        </Comment.Group>  
      </div> 
    )
  }
}

const mapStateToProps = state => {
  return {
    gallery: state.gallery,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePicture)