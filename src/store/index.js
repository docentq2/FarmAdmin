import { reactive, readonly, inject } from 'vue';

export const stateSymbol = Symbol('state');

export const createStore = () => {
  const state = reactive({
    money: 100,
    cows: 0,
    hay: 0,
    milk: 0,
    day: 0
  });
  const change = (changeFields) => {
    for (const changeField of changeFields) {
      state[changeField[0]] += changeField[1];
    }
  };

  return { change, state: readonly(state) };
}

export const useState = () => inject(stateSymbol);
