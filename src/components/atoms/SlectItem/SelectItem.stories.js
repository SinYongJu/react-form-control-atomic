
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectItem from './SelectItem';

const STORY_TITLE = "Test Button"

const story = storiesOf('SelectItem', module)

const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const opt = {
 option : 'option',
 tabIndex : 0 
};

export const actions = {
  onClick: action('onClick'),
};


story.addDecorator(divDecorator)
  .add('default', () => <SelectItem opt={{...opt}} {...actions} />)
