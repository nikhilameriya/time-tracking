import React from 'react';
import { storiesOf } from '@kadira/storybook';

import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import DesktopNav from '../src/components/Header/DesktopNav';

const appBar = getMuiTheme().appBar
const AddBackground = (story) => (
  <div style={{backgroundColor: appBar.color}}>
    {story()}
  </div>
)
storiesOf('Header', module)
  .addDecorator(AddBackground)
  .add('<DesktopNav /> - Guess', () => (
    <DesktopNav userLoggedIn={false} />
  ))
  .add('<DesktopNav /> - Logged in user', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <DesktopNav userLoggedIn={true} />
      </Provider>
    )
  });  
