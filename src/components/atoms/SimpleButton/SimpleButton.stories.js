import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SimpleButton from './SimpleButton';

const THEME_CLASS = {
    WHITE : 'btn_white'
}
const story = storiesOf('SimpleButton', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const button = {
  id: '1',
  themeClass : 'btn_normal',
  name : 'SimpleButton name',
  text : 'depending text on your texting'
};

export const actions = {
  onClick: action('onClick'),
};


story.addDecorator(divDecorator)
  .add('default', () => <SimpleButton {...button} {...actions} />)
  .add('theme_white', () => <SimpleButton {...button} themeClass={THEME_CLASS.WHITE} {...actions} />)


  