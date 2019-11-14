import React from "react";
import PropTypes from "prop-types";
import Input from "../../atoms/Input/Input";
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const {  input , button , onChange, onClick,onKeyDown } = props
  const { id, value } = input;
  return (
    <div className="box_search">
      <label htmlFor={id}>let's Search {value}</label>
      <Input {...input} onChange={onChange} onKeyDown={onKeyDown}/>
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
    input :  {
        id: "searchInp",
        name: "searchKeyword",
        placeholder: "search keyword; 이효리, 아이유, 세라",
        value: ""
    },
    button : {
      themeClass: "btn_white",
      text: "검색"
    },
    onChange : ()=>{ console.log('insert yout onChange eventListener')}, 
    onClick : ()=>{ console.log('insert yout onClick eventListener')},
    onKeyDown : ()=>{ console.log('insert yout onKeyDown eventListener')}
};

export default SearchBox;
