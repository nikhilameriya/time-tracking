import React from 'react'
import { storiesOf } from '@kadira/storybook'

import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'
import {Register} from '../src/containers/auth/Register'


storiesOf('Authentication', module)
  .add('<Register />', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div style={{margin: 40}}>
          <Register />
        </div>
      </Provider>
    )
  })
  
