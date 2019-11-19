import React, { createContext, useState, useEffect } from "react";
import { WEB_SEARCH_URL, SEARCH_RESULT ,SEARCH_PENDING, SEARCH_INIT } from "../constants/search_api";

const WEB_SEARCH_RESULT = "documents";
export const SearchContext = createContext(null);

export const SearchProvider = ({ children, ...rest }) => {
  const [search, searchSet] = useState({
    result: [],
    status : SEARCH_INIT
  });
  
  const searchFetch = async keyword => {
    let url = WEB_SEARCH_URL + keyword;
    searchSetStatus(SEARCH_PENDING)
    const response = await fetch(url)
    const data = await response.json();
    searchSet(c => ({
      ...c,
      result: data,
      status: SEARCH_RESULT
    }));
    
  };

  const searchSetStatus = (status) => {
    searchSet(c => ({
      ...c,
      status: status
    }));
  }
  const searchGetStatus = () => search.status;
  const searchGetResult = () => search.result;
  const value = {
    searchFetch,
    searchGetStatus,
    searchResults :  searchGetResult()
  };
  return (
    <SearchContext.Provider value={value} {...rest}>
      {children}
    </SearchContext.Provider>
  );
};
export const SearchConsumer = SearchContext.Consumer;
