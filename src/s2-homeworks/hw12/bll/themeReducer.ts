import {restoreState} from '../../hw06/localStorage/localStorage';

type ThemeStateType = typeof initState

const initState = {
  themeId: restoreState('App-Theme-Id', 1),
}

export const themeReducer = (state = initState, action: Actions): ThemeStateType => {
  switch (action.type) {
    case 'SET_THEME_ID': {
      return { ...state, themeId: action.themeId }
    }

    default:
      return state
  }
}

export const changeThemeId = (themeId: number): changeThemeIdType => ({type: 'SET_THEME_ID', themeId})

type Actions = changeThemeIdType

type changeThemeIdType = {
  type: 'SET_THEME_ID',
  themeId: number,
}
