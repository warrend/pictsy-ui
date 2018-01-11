import React, { Component } from 'react';
import Picture from '../components/Picture'
import data from '../data/images.json'

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: data.images,
			searchTerm: ''
		}
	}

	handleSearchChange = (event) => {
		this.setState({ searchTerm: event.target.value.toLowerCase() })
	}

  render() {
  	const images = this.state.images
    return (
      <div>
      	<form onSubmit={this.handleSubmit} id="message-form">
           <input type="text" id="searchTerm" value={this.state.searchTerm} onChange={this.handleSearchChange} name="searchTerm" />
          <input type="submit" value="Submit" />
        </form>
      	{images.filter(word => word.metadata.toLowerCase().includes(this.state.searchTerm)).map((img, key) => {
      		return <div><p>{img.image}</p></div>
      	})}
      </div>
    );
  }
}

export default Gallery;
