import { FETCH_USERS } from '../actions/actionGenerators'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data
    default:
      return state
  }
}