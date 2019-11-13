import React from "react";
import PropTypes from "prop-types";
import SearchBox from "../../molecule/SearchBox/SearchBox";
import SeachReult from "../../molecule/SeachReult/SeachReult";

const SearchWeb = ({ searchProps, onClick, onChange }) => {
  const { inp, button, searchResult } = searchProps;
  return (
    <>
      <SearchBox
        inp={inp}
        button={button}
        onClick={onClick}
        onChange={onChange}
      />
      {searchResult && searchResult.length > 0 && (
        <SeachReult result={searchResult} />
      )}
    </>
  );
};

SearchWeb.propTypes = {};

export default SearchWeb;
