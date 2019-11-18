import React from "react";
import PropTypes from "prop-types";
import "./SeachResult.scss";
import {
  SEARCH_PENDING,
  SEARCH_INIT,
  SEARCH_RESULT
} from "../../constants/search_api";

const SearchListItem = ({ item: { cuntent_id, title, contents, url, datetime } }) => {
  return (
    <li>
      <span>{cuntent_id}</span>
      <a href={url}> 
        <strong>{title}</strong>
        <p>{contents}</p>
      </a>
      <small>{datetime}</small>
    </li>
  );
};

function SeachResult(props) {
  console.log(props)
  const { result , status} = props
  if (status === SEARCH_INIT) {
    return null;
  }
  if (status === SEARCH_PENDING) {
    return <p>...loading</p>;
  }
  if (status === SEARCH_RESULT && result.length === 0) {
    return <p>검색 결과가 없습니다</p>;
  }
  return (
    <ul className="webList">
      { result.map((item, index) => (
          <SearchListItem key={`search_${index}`} item={item} />
        ))}
    </ul>
  )
}

SearchListItem.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  url: PropTypes.string,
  datetime: PropTypes.string
};

SeachResult.propTypes = {
  result: PropTypes.array
};
SeachResult.defaultProps = {
  result: []
};

export default SeachResult;
