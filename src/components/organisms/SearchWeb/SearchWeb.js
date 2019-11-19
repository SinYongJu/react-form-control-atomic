import React from "react";
import SearchBox from "../../molecule/SearchBox/SearchBox";
import SeachResult from "../../molecule/SeachResult/SeachResult";


function SearchWeb(props) {
  const {searchProps, ...rest } = props;
  const { searchResult,searchResultDeleteHandler, status , ...searchRest} = searchProps
  return (
    <>
      <SearchBox {...searchRest} {...rest} />
      <SeachResult result={searchResult} onClick={searchResultDeleteHandler} status={status}/>
    </>
  );
}

export default SearchWeb;
