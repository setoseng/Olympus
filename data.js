const types = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export const actionCreators = {
  loading: () => ({ type: types.LOADING }),
  success: (payload) => ({ type: types.SUCCESS, payload }),
  failure: () => ({ type: types.FAILURE })
} 

export const initialState = {
  loading: true,
  error: false,
  menu: []
}

export function reducer(state, action) {
  switch(action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false }
    case types.SUCCESS:
      return { ...state, loading: false, error: false, menuType: action.payload }
    case types.FAILURE:
      return { ...state, loading: false, error: true }
  }
}