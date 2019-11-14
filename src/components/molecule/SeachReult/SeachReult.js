import React from "react";
import PropTypes from "prop-types";
import "./SeachReult.scss";
const SearchListItem = ({ item: { title, contents, url, datetime } }) => {
  return (
    <li>
      <strong>{title}</strong>
      <p>{contents}</p>
      <a href={url}>링크</a>
      <small>{datetime}</small>
    </li>
  );
};

function SeachReult({ result }) {
  return (
    <ul>
      {result &&
        result.map((item, index) => (
          <SearchListItem key={`search_${index}`} item={item} />
        ))}
    </ul>
  );
}

SearchListItem.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  url: PropTypes.string,
  datetime: PropTypes.string
};

SeachReult.propTypes = {
  result: PropTypes.array
};
SeachReult.defaultProps = {
  result: []
};

export default SeachReult;
