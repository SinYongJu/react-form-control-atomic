
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {inp} from '../../atoms/InputText/InputText.stories'
import button from '../../atoms/Button/Button.stories'

import Search from './Search';
const STORY_TITLE = "Test Search"
const story = storiesOf('Search', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const search = {
    inp : {...inp,placeHolder : STORY_TITLE},
    button : {...button, title : "검색"}
};

export const actions = {
  onChange: action('onChange'),
  onClick : action('onClick')
};


story.addDecorator(divDecorator)
  .add('default', () => <Search search={{...search}} {...actions}/>)

  