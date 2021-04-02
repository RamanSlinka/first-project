import {reducer, StateType} from "./Reducer"

test('collapsed should be true', () =>{
//данные
const state: StateType = {
    collapsed: false
}

  //действия которые выполняем
const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


  //  ожидания
expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () =>{
//данные
const state: StateType = {
    collapsed: true
}

  //действия которые выполняем
const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


  //  ожидания
expect(newState.collapsed).toBe(false)
})
test('crazy action', () =>{
//данные
const state: StateType = {
    collapsed: true
}

  //действия которые выполняем
const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


  //  ожидания
expect(() => {
    reducer(state, {type: 'WTF'})
}).toThrowError()
})