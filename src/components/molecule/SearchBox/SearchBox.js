import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import "./SearchBox.scss";

const SearchBox = ({ inp, button, onChange, onClick,onKeyDown }) => {
  const { id, value } = inp;
  return (
    <div className="box_search">
      <label htmlFor={id}>let's Search {value}</label>
      <Input {...inp} onChange={onChange} onKeyDown={onKeyDown}/>
      <SimpleButton
        {...button}
        themeClass={"btn_white"}
        text={"검색"}
        onClick={onClick}
      />
    </div>
  );
};

SearchBox.propTypes = {
  inp: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
  }),
  button: PropTypes.shape({
    themeClass: PropTypes.string,
    text: PropTypes.string
  }),
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default SearchBox;
