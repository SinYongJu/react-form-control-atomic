import React from 'react';
import { storiesOf } from "@storybook/react";
import EditWebPost from './EditWebPost'
import {inputInfo} from '../../molecule/InputInfo/InputInfo.stories'
import { action } from '@storybook/addon-actions';
import { EDIT_STATE } from '../../constants/edit_state';

const story = storiesOf("Organism/EditWebPost", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const actions = {
  onChange : action('onChage')
}
export const editpost = {
  inputTitle : inputInfo,
  inputDesc : inputInfo,
  state : EDIT_STATE.INIT
}
export const editErrorPost={
  ...editpost,
  inputTitle :{...inputInfo,value:'ins',isValid : false },
  inputDesc :{...inputInfo,value:'#$#특수문자 시작',isValid : false },
  state : EDIT_STATE.VALIDATING
}


story
  .addDecorator(divDecorator)
  .add("default", () => <EditWebPost editpost={{...editpost}} {...actions}/>)
  .add("default--ERROR", () => <EditWebPost editpost={{...editErrorPost}} {...actions}/>);
