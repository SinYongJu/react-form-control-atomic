import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { inp } from '../../atoms/Input/Input.stories';
import { button } from '../../atoms/SimpleButton/SimpleButton.stories';
import SearchBox from './SearchBox';

const story = storiesOf('SearchBox', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>


export const searchBox = {
    inp : {...inp},
    button :{...button},
};

export const actions = {
  onChange: action('onChange'),
  onClick: action('onClick'),
};


story.addDecorator(divDecorator)
  .add('default', () => <SearchBox {...searchBox} {...actions} />)


  