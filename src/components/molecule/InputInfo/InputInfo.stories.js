import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputInfo from './InputInfo'
import { input } from "../../atoms/Input/Input.stories";

const story = storiesOf("Molecules/InputInfo", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const inputInfo = {
  ...input,
  text : 'insert your input title'
};

export const actions = {
  onChange: action("onChange")
};

story
  .addDecorator(divDecorator)
  .add("default", () => <InputInfo {...inputInfo} {...actions} />);
