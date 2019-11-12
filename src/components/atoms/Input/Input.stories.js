
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';


const STORY_TITLE = "Test input"
const story = storiesOf('input', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const inp = {
  id : 'input01', 
  name:'input',
  themeClass : 'btn_normal',
  placeHolder: STORY_TITLE,
  value : 'depending value on your onChange'
};

export const actions = {
  onChange: action('onChange'),
};


story.addDecorator(divDecorator)
  .add('default', () => <Input {...inp} {...actions} />)

  