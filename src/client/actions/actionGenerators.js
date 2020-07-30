export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (dispatch, getState, api) => {
  console.log('about to request users')
  const res = await api.get('/users')
  console.log('users await returned');

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}

export const FETCH_CURRENT_USER = 'fetch_current_user'
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}

export const FETCH_ADMINS = 'fetch_admins'
export const fetchAdmins = () => async (dispatch, getState, api) => {
  console.log('about to request admins')
  const res = await api.get('/admins')
  console.log('admins await returned');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  })
}