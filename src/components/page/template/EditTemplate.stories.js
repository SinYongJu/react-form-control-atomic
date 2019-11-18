import React from 'react';
import { storiesOf } from "@storybook/react";
import EditTemplate from './EditTemplate'
import { action } from '@storybook/addon-actions';
import SimpleButton, { BUTTON_THEME } from '../../atoms/SimpleButton/SimpleButton'
import {editpost} from '../../organisms/EditWebPost/EditWebPost.stories';
import EditWebPost from '../../organisms/EditWebPost/EditWebPost';

const story = storiesOf("Template/EditTemplate", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;
const buttonSubmit = {
  themeClass: BUTTON_THEME.RED,
  text: 'submit'
}
const buttonCancel = {
  themeClass: BUTTON_THEME.BLACK,
  text: 'cancel'
}
export const actions = {
  onClick : action('onClick'),
  onChange : action('onChange')
}
const editContents = {
  header : <h3>Edit.</h3>,
  body : <EditWebPost editpost={{...editpost}} onChange={actions.onChange}/>,
  buttonSubmit : <SimpleButton {...buttonSubmit} {...actions}/>,
  buttonCancel : <SimpleButton {...buttonCancel} {...actions}/>,
}

story
  .addDecorator(divDecorator)
  .add("default", () => <EditTemplate  contents={editContents} />);
