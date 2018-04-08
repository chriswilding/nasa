import PropTypes from "prop-types";
import React from "react";

const Asset = ({ match: { params: { id } } }) => <p>Asset {id}</p>;

Asset.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Asset;
