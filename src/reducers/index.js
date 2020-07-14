import {combineReducers} from 'redux'
import auth from './auth'
import timeEntryInput from './timeEntryInput'
import timeEntries from './timeEntries'
import tags from './tags'

const appReducer = combineReducers({
  auth,
  timeEntryInput,
  timeEntries,
  tags,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}
export default rootReducer