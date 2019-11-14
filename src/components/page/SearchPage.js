import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SearchTemplate from "./template/SearchTemplate";
import SearchWeb from "../organisms/SearchWeb/SearchWeb";
import { SearchContext } from "../context/SearchContext";

const defualtInput = {
  id: "searchInp",
  name: "searchKeyword",
  placeholder: "search keyword; 이효리, 아이유, 세라",
  value: ""
};
const defualtSearchButton = {
  button: {
    themeClass: "btn_white",
    text: "검색"
  }
};

const SearchPage = props => {
  const { searchFetch, getSearchResult } = useContext(SearchContext);

  const [searchProps, actionSearchProps] = useState({
    inp: defualtInput,
    button: defualtSearchButton,
    searchResult: []
  });

  const onSearchInpChange = e => {
    e.preventDefault();
    let value = e.target.value;
    actionSearchProps(c => ({
      ...c,
      inp: { value }
    }));
  };

  const onSearchKeyDown = (e) =>{
      if(e.key === 'Enter'){
        doSearch()
      }
    
  }
  const onSearchButtonClick = () => {
    doSearch()
  };
  const doSearch = () => {
    const value = searchProps.inp.value;
    searchFetch(value);
  }
  useEffect(() => {
    console.log("변하니?");
    actionSearchProps(c => ({
      ...c,
      searchResult: getSearchResult()
    }));
  }, [getSearchResult]);
  return (
    <SearchTemplate
      search={
        <SearchWeb
          searchProps={searchProps}
          onChange={onSearchInpChange}
          onClick={onSearchButtonClick}
          onKeyDown={onSearchKeyDown}
        />
      }
    />
  );
};

SearchPage.propTypes = {};

export default SearchPage;
