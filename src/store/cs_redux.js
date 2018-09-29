const CS = 'CS'

const initState = {
  name: 'cs'
}

export default function (state=initState, action) {
  switch(action.type) {
    case CS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

function CsSuccess() {
  return {type: CS, payload: { name: 'cs1' }}
}

export function CSSConditionRule() {
  return dispatch => {
    dispatch(CsSuccess())
  }
}