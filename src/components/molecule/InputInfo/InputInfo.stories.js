import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import InputInfo from './InputInfo'
import { input } from "../../atoms/Input/Input.stories";
import { EDIT_STATE } from "../../constants/edit_state";

const story = storiesOf("Molecules/InputInfo", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const inputInfo = {
  ...input,
  text : 'insert your input title',
  error : 'Error text, insert your texy Error TEXT!' ,
  isValid : true,
  state : EDIT_STATE.INIT
};

export const actions = {
  onChange: action("onChange")
};

story
  .addDecorator(divDecorator)
  .add("default", () => <InputInfo {...inputInfo} {...actions} />)
  .add("default--Error", () => <InputInfo {...inputInfo} state={EDIT_STATE.VALIDATING} isValid={false} {...actions} />);
