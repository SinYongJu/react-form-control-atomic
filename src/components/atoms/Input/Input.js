import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";
const Input = props => {
  const { id, name, placeholder, value, onChange ,onKeyDown} = props;
  return (
    <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
};

export default Input;
