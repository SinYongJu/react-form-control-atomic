import React from "react";
import "./SearchTemplate.scss";
const SearchTemplate = props => {
  const { search } = props;
  return (
    <>
      <div className="area_search">{search}</div>
    </>
  );
};

export default SearchTemplate;
