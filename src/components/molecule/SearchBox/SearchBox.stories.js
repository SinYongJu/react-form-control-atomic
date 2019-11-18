import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { input } from "../../atoms/Input/Input.stories";
import { button } from "../../atoms/SimpleButton/SimpleButton.stories";
import SearchBox from "./SearchBox";
import { BUTTON_THEME } from "../../atoms/Button/Button";

const story = storiesOf("SearchBox", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const searchBox = {
  inp: { ...input },
  button: { ...button, themeClass: BUTTON_THEME.BUTTON_YELLOW }
};

export const actions = {
  onChange: action("onChange"),
  onClick: action("onClick")
};

story
  .addDecorator(divDecorator)
  .add("default", () => <SearchBox {...searchBox} {...actions} />);
