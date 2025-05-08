
const initState = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return { ...state, isLoading: action.isLoading }

    default:
      return state
  }
}

export type LoadingStateType = Pick<LoadingActionType, 'isLoading'>

type LoadingActionType = {
  type: 'CHANGE_LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: 'CHANGE_LOADING',
  isLoading,
})
