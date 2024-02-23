import { createStore } from "redux";

//action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//reducer
function reducer(state = 0, action: any) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

//store
var store = createStore(reducer);

const stateRedux = {
  increment() {
    store.dispatch({ type: INCREMENT });
  },
  decrement() {
    store.dispatch({ type: DECREMENT });
  },
  subscribe(subscriber: any) {
    store.subscribe(subscriber);
  },
  get() {
    return store.getState();
  }
}

export default stateRedux;