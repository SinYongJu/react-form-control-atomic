import React from "react";
import PropTypes from "prop-types";
import "./SimpleButton.scss";
export const BUTTON_THEME = {
  DEFAULT: "btn_comm",
  BLACK: "BUTTON_BLACK",
  RED: "BUTTON_RED",
  YELLOW: "BUTTON_YELLOW",
  WHITE: "BUTTON_WHITE",
  GREY: "BUTTON_GREY"
};

const SimpleButton = props => {
  const { themeClass, text, onClick, state } = props;
  return (
    <button
      className={themeClass && `${BUTTON_THEME.DEFAULT} ${themeClass}`}
      disabled={state && state === "BUTTON_DISABLED" ? true : false}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

SimpleButton.propTypes = {
  themeClass: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default SimpleButton;

SimpleButton.defaultProps = {
  themeClass: BUTTON_THEME.DEFAULT,
  title: "BUTTON",
  state: null,
  onClick: () => {
    console.log("insult your click");
  }
};
