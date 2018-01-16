import React, { Component } from 'react'
import GalleryPicture from '../components/GalleryPicture'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imagesActions'
import _ from 'lodash'
import { Search } from 'semantic-ui-react'

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			results: this.props.gallery,
			isLoading: false
		}
	}

	componentWillReceiveProps(nextProps) {
	  if(this.props !== nextProps) {
	  	this.resetComponent(nextProps)
	  }
	}

  resetComponent = (nextProps) => this.setState({ isLoading: false, results: nextProps.gallery, value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.description })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.description)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.gallery, isMatch),
      })
    }, 500)
  }

  render() {
  	const { isLoading, value, results } = this.state
    return (
      <div className="container">
      	<header>
			    <h1><i aria-hidden="true" className="empty star small red icon"></i>Pictsy</h1>
			    <div className="search">
			      <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            placeholder="neighborhood..."
            {...this.props}
          />
			    </div>
			  </header>
			  <div className="grid">
	      	{results.map((img, key) => {
	      		return <GalleryPicture img={img} key={key} comments={this.props.comments} />
	      	})}
      	</div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)