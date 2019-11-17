import React, { useState, useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import SearchTemplate from "./template/SearchTemplate";
import SearchWeb from "../organisms/SearchWeb/SearchWeb";
import { SearchContext } from "../context/SearchContext";
import { SEARCH_INIT } from "../constants/search_api";
import { BUTTON_THEME } from "../atoms/SimpleButton/SimpleButton";

const defualtInput = {
  id: "searchInp",
  name: "searchKeyword",
  placeholder: "search keyword; 이효리, 아이유, 세라",
  value: ""
};
const defualtSearchButton = {
  themeClass: BUTTON_THEME.GREY,
  text: "검색"
};

function SearchPage(props) {
  const { searchFetch, searchGetResult, searchGetStatus } = useContext(
    SearchContext
  );
  const [searchCtx, searchSetCtx] = useState({
    input: defualtInput,
    button: defualtSearchButton,
    searchResult: null,
    status: SEARCH_INIT
  });

  useMemo(() => {
    searchSetCtx(ctx => ({
      ...ctx,
      status: searchGetStatus()
    }));
  }, [searchGetStatus]);

  const onSearchInputChange = e => {
    e.preventDefault();
    let value = e.target.value;
    searchSetCtx(ctx => ({
      ...ctx,
      input: { value }
    }));
  };
  const searchKeyword = () => {
    const value = searchCtx.input.value;
    searchFetch(value);
  };

  const onSearchKeyDown = e => {
    if (e.key === "Enter") {
      searchKeyword();
    }
  };
  const onSearchButtonClick = () => {
    searchKeyword();
  };

  useEffect(() => {
    if (searchCtx.status !== SEARCH_INIT) {
      searchSetCtx(ctx => ({
        ...ctx,
        searchResult: searchGetResult()
      }));
    }
  }, [searchCtx.status, searchGetResult]);

  const searchWeb = (
    <SearchWeb
      searchProps={searchCtx}
      onChange={onSearchInputChange}
      onClick={onSearchButtonClick}
      onKeyDown={onSearchKeyDown}
    />
  );
  return <SearchTemplate search={searchWeb} />;
}

export default SearchPage;
