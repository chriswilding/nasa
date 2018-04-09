import PropTypes from "prop-types";
import React from "react";

const Image = ({ description, href, title }) => (
  <div className="asset-image">
    <h1 className="asset-image__title">{title}</h1>
    <p className="asset-image__description">{description}</p>
    <img className="asset-image__image" alt="" src={href} />
  </div>
);

Image.propTypes = {
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Image;
