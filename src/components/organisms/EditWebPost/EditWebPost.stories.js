import React from 'react';
import { storiesOf } from "@storybook/react";
import EditWebPost from './EditWebPost'
import {inputInfo} from '../../molecule/InputInfo/InputInfo.stories'
import { action } from '@storybook/addon-actions';

const story = storiesOf("Organism/EditWebPost", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const actions = {
  onChange : action('onChage')
}
export const editpost = {
  inputTitle : inputInfo,
  inputDesc : inputInfo
}


story
  .addDecorator(divDecorator)
  .add("default", () => <EditWebPost editpost={{...editpost}} {...actions}/>);
