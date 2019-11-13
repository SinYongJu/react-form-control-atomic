import React from "react";
import PropTypes from "prop-types";
import SearchListItem from "../../atoms/SearchListItem/SearchListItem";

const SeachReult = ({ result }) => {
  return (
    <ul>
      {result.map((item, index) => (
        <SearchListItem key={`search_${index}`} item={item} />
      ))}
    </ul>
  );
};

SeachReult.propTypes = {
  result: PropTypes.array
};

export default SeachReult;
