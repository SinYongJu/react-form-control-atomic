import React from "react";
import PropTypes from "prop-types";

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

SearchListItem.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  url: PropTypes.string,
  datetime: PropTypes.string
};

export default SearchListItem;
