import React, { Component } from 'react'
import Gallery from './Gallery'
import SinglePicture from './SinglePicture'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/imagesActions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchImages()
  } 

  render() {
    return (
    	<Router>
	      <div>
	        <Route exact path="/" component={Gallery}/>
	        <Route path="/images/:id" component={SinglePicture} />
	      </div>
      </Router>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)