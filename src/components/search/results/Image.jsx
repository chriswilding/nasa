import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Image = item => (
  <div>
    <Link to={`/asset/${item.id}`}>
      <img alt={item.title} src={item.thumb} />
    </Link>
  </div>
);

/* eslint-enable jsx-a11y/anchor-is-valid */

export default Image;
