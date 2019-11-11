import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {SelectItem} from '../../atoms/SlectItem/SelectItem.stories'
import CustomSelect from './CustomSelect';

const STORY_TITLE = "Test Select"
const story = storiesOf('CustomSelect', module)
const divDecorator = story => <div style={{ padding: '3rem' }}>{story()}</div>

export const customSelect = {
        id : 'customSelect01',
        name : 'select',
        title : 'select value',
        options: ['0','1','2','3','4','5'],
        value : '2',
};

const  selectUpdateHandler = (value) => {
  customSelect.value = value
}


export const actions = {
  onClick : action('onClick'),
  selectUpdateHandler : action('selectUpdateHandler')
};


story.addDecorator(divDecorator)
  .add('default', () => <CustomSelect select={{...customSelect}} selectUpdateHandler={selectUpdateHandler}/>)
