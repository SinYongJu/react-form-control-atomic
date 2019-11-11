
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

const STORY_TITLE = "Test Button"
const STATE = {
    BUTTON_NORMAL : "BUTTON_NORMAL",
    BUTTON_RED : "BUTTON_RED",
    BUTTON_YELLOW : "BUTTON_YELLOW",
    BUTTON_DISABLED : "BUTTON_DISABLED",
}

const story = storiesOf('Button', module)

const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const button = {
  title: STORY_TITLE,
  state: STATE.BUTTON_NORMAL,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onClick: action('onClick'),
};


story.addDecorator(divDecorator)
  .add('default', () => <Button button={button} {...actions} />)
  .add('red', () => <Button button={{ ...button, state: STATE.BUTTON_RED }} {...actions} />)
  .add('yellow', () => <Button button={{ ...button, state: STATE.BUTTON_YELLOW }} {...actions} />)
  .add('disabled', () => <Button button={{ ...button, state: STATE.BUTTON_DISABLED }} {...actions} />)

  