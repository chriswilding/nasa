import PropTypes from "prop-types";
import React from "react";

const Image = ({ description, href, title }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <img alt="" src={href} />
  </div>
);

Image.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Image;
