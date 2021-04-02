type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
          const stateCopy =  {...state}
            stateCopy.collapsed = !stateCopy.collapsed
            return stateCopy
        default:
            throw new Error('Hay, Man ! Bad action type')
    }
    return state
}