import {UserType} from '../HW8'


type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const copy = [...state];

      copy.sort((a, b) => {
        if (action.payload === 'up') {
          return a.name > b.name ? 1 : -1;
        } else {
          return a.name < b.name ? 1 : -1;
        }
      })
      return copy;
    }

    case 'check': {
      return state
        .filter(u => u.age >= action.payload)
    }

    default:
      return state
  }
}
