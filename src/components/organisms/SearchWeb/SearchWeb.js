import React from "react";
import SearchBox from "../../molecule/SearchBox/SearchBox";
import SeachResult from "../../molecule/SeachResult/SeachResult";


function SearchWeb(props) {
  const {searchProps, ...rest } = props;
  const { searchResult, status , ...searchRest} = searchProps
  return (
    <>
      <SearchBox {...searchRest} {...rest} />
      <SeachResult result={searchResult} status={status}/>
    </>
  );
}

export default SearchWeb;
