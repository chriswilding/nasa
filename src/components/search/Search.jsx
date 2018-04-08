import PropTypes from "prop-types";
import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: false,
      images: false,
      query: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} role="search">
        <fieldset>
          <input
            id="query"
            aria-label="Search for images and audio from NASA"
            name="query"
            onChange={this.handleOnChange}
            placeholder="Moon"
            type="search"
          />
          <input type="submit" value="Search" />
          <br />
          <label htmlFor="images">
            Images
            <input
              id="images"
              checked={this.state.images}
              name="images"
              onChange={this.handleOnChange}
              type="checkbox"
            />
          </label>
          <label htmlFor="audio">
            Audio
            <input
              id="audio"
              checked={this.state.audio}
              name="audio"
              onChange={this.handleOnChange}
              type="checkbox"
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;
