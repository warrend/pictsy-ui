import React, { Component } from 'react'
import Gallery from './Gallery'
import SinglePicture from './SinglePicture'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
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

export default App;
