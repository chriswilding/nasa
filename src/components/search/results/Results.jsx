import PropTypes from "prop-types";
import React from "react";

import Audio from "./Audio";
import Image from "./Image";
import Video from "./Video";

const typeToComponent = {
  audio: Audio,
  image: Image,
  video: Video
};

const Results = ({ results }) => {
  const items = results.map(item => {
    const ResultComponent = typeToComponent[item.type];
    return <ResultComponent key={item.id} {...item} />;
  });

  return <div>{items}</div>;
};

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Results;
