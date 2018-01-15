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
    this.props.actions.addComment(this.state, id)
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
    const url = this.props.match.url
    const id = this.props.match.params.id
    const picture = this.props.gallery[id]
    const forward = (parseInt(id, 10) + 1) % (this.props.gallery.length - 1) 
    return (
      <div class="single">
        <header className="container">
          <Link to={process.env.PUBLIC_URL + '/'}><h1><i aria-hidden="true" className="empty star small red icon"></i>Pictsy</h1></Link>
        </header>
        <div class="container-img">
          <img src={process.env.PUBLIC_URL + url + '.jpg'} alt={picture.description} />
          <p className="img-description">{picture.description} / <i aria-hidden="true" className="comment circular inverted small red icon"></i>{picture.comments.length}</p>
          <Navigation id={id} forward={forward} back={this.back(id)} />
        </div>
        <Comment.Group className="container-comments">
          <Comments picture={picture} />
          <CommentsForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} /> 
        </Comment.Group>  
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gallery: state.gallery
  }
}

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePicture)