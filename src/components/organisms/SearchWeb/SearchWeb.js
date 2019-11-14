import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../../molecule/SearchBox/SearchBox";
import SeachReult from "../../molecule/SeachReult/SeachReult";
import { SEARCH_PENDING,SEARCH_INIT,SEARCH_RESULT } from "../../constants/search_api";

function SearchWeb (props) {
  const { searchProps, ...rest} = props
  const { searchResult, status} = searchProps;
  const result = (status,  searchResult) => {
    if(status === SEARCH_INIT){
      return 
    }
    if(status === SEARCH_PENDING){
      return <p>...loading</p>
    }
    if(status === SEARCH_RESULT&&searchResult&&searchResult.length === 0){
      return <p>검색 결과가 없습니다</p>
    }
    if(status === SEARCH_RESULT&&searchResult !==null){
      return <SeachReult result={searchResult} />
    }
  }
  return (
    <>
      <SearchBox
        {...searchProps}
        {...rest}
      />
       {result(status,  searchResult)}
    </>
  );
};

SearchWeb.propTypes = {};


export default SearchWeb;
