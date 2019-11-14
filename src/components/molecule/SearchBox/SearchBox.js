import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import SimpleButton, {
  BUTTON_THEME
} from "../../atoms/SimpleButton/SimpleButton";
import "./SearchBox.scss";

const BUTTON_TEXT = "검색";
const SearchBox = props => {
  const { input, button, onChange, onClick, onKeyDown } = props;
  const { id, value } = input;
  const { themeClass } = button;
  return (
    <div className="box_search">
      <label htmlFor={id}>let's Search : {value}</label>
      <div className="tf_comm">
        <Input {...input} onChange={onChange} onKeyDown={onKeyDown} />
        <SimpleButton
          {...button}
          themeClass={themeClass}
          text={BUTTON_TEXT}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  input: PropTypes.shape({
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

SearchBox.defaultProps = {
  input: {
    id: "searchInp",
    name: "searchKeyword",
    placeholder: "search Keyword",
    value: ""
  },
  button: {
    themeClass: BUTTON_THEME.RED,
    text: "Search"
  },
  onChange: () => {
    console.log("insert yout onChange eventListener");
  },
  onClick: () => {
    console.log("insert yout onClick eventListener");
  },
  onKeyDown: () => {
    console.log("insert yout onKeyDown eventListener");
  }
};

export default SearchBox;
