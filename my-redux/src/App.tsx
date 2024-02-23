import { Provider, useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './App.css';
import store from './stores/state';

function State() {
  const [state, setState] = useState(0);

  store.subscribe(() => {
    setState(store.get());
  })

  return (
    <div>
      <p>{state}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <button onClick={store.decrement}>
        Decrement
      </button>
      <button onClick={store.increment}>
        Increment
      </button>
      <State />
    </>
  );
}

export default App;
