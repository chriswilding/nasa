import PropTypes from "prop-types";
import React, { Component } from "react";
import APIClient from "../../APIClient";
import Image from "./Image";

const typeToComponent = {
  image: Image
};

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    APIClient.getAssetById(id).then(item => {
      this.setState({
        item,
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading . . .</div>;
    }

    const { item } = this.state;
    const Asset = typeToComponent[item.type];

    return <Asset {...item} />;
  }
}

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Page;
