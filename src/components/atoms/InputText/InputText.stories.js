
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputText from './InputText';

const STORY_TITLE = "Test inputText"

const STATE = {
    inputText_NORMAL : "inputText_NORMAL"
}

const story = storiesOf('inputText', module)

const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const inp = {
  id: '1',
  placeHolder: STORY_TITLE,
  state: STATE.inputText_NORMAL
};

export const actions = {
  onChange: action('onChange'),
};


story.addDecorator(divDecorator)
  .add('default', () => <InputText inp={{...inp}} {...actions} />)

  