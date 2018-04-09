import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Image = item => (
  <div className="search-result">
    <Link to={`/asset/${item.id}`}>
      <img className="search-result__image" alt={item.title} src={item.thumb} />
    </Link>
  </div>
);

/* eslint-enable jsx-a11y/anchor-is-valid */

export default Image;
