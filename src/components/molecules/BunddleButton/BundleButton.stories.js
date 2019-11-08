
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BundleButton from './BundleButton';
import { button, actions } from '../../atoms/Button/Button.stories';

const story = storiesOf('BundleButton', module)

const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

story.addDecorator(divDecorator)
  .add('default', () => <BundleButton button={{...button}} {...actions}/>)
 
  