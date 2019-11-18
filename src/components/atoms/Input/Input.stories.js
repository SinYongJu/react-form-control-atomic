
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';


const STORY_TITLE = "Test input"
const story = storiesOf('Atoms/input', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const input = {
  id : 'input01', 
  name:'input',
  themeClass : 'btn_normal',
  placeHolder: STORY_TITLE,
  value : 'depending value on your onChange'
};

export const actions = {
  onChange: action('onChange'),
  onKeydown: action('onChange')
};


story.addDecorator(divDecorator)
  .add('default', () => <Input {...input} {...actions} />)

  