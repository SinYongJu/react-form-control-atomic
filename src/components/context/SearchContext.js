import React, { createContext, useState, useEffect } from "react";
import { WEB_SEARCH_URL } from "../constants/search_api";

const WEB_SEARCH_RESULT = "documents";
export const SearchContext = createContext(null);

export const SearchProvider = ({ children, ...rest }) => {
  const [search, actionSearch] = useState({
    result: []
  });
  const searchFetch = async keyword => {
    let url = WEB_SEARCH_URL + keyword;
    const data = await fetch(url).then(res => res.json());
    actionSearch(c => ({
      ...c,
      result: data[0][WEB_SEARCH_RESULT]
    }));
  };
  const getSearchResult = () => search.result;
  const value = {
    searchFetch,
    getSearchResult
  };
  return (
    <SearchContext.Provider value={value} {...rest}>
      {children}
    </SearchContext.Provider>
  );
};
export const SearchConsumer = SearchContext.Consumer;
