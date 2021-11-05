---
slug: 'my-personal-notes-on-redux-and-rtk'
title: 'My Personal Notes On Redux And RTK'
isPublished: true
publishedAt: '2021-11-02'
tags:
  - 'react'
  - 'redux'
  - 'my notes'
---

Redux is a programming pattern and library to manage and predictably update global application state using events called `actions`. The patterns and tools provided by Redux help us to understand when, where, why, and how our application state is being updated and what will happen if anything changes. As a result, we will be able to write applications confidently which are predictable and testable.

Some of the best use cases for using Redux are:

- if an application has many states which are used in different parts of the application
- if the state updates frequently
- if the app has a medium or large codebase
- if the app has complex state updating logic

## Redux Store

Every redux application has a container named store, which holds the application's global state. This is an object with some special features:

- we must never change the object directly
- instead, we should create an `action` object which will describe the changes (something happened in the app) and `dispatch` the action to notify the store about the change
- then the store runs the root `reducer` function and this will calculate the new state based on the previous state and the action
- finally, the store notifies the subscriber and tell the app to update UI based on the state change

## State, Actions, Reducers

- **state**: In Redux app, a root state is a JavaScript object which holds other values
- **action**: an action object must have a key named `type` and we have to provide a string value to uniquely identify an action. The value of `key` should be a readable string so that it's easy to understand. We can also provide other data in a variable named `payload`

```js
const addTodoAction = {
  type: 'todos/add',
  payload: 'Learn redux',
};
```

- **reducer**: a reducer is a function that takes two arguments, a `state` and an `action`. It updates the state based on the action and returns the new state. Initially, a Redux app doesn't have a state, and we have to provide an `initialState` as the default value for the reducer. Based on the type of the action, either we have to return a new state object or we have to return the old state. We have to update the state in an `immutable` way.

```js
const initialState = { todos: [] };

function todosReducer(state = initialState, action) {
  if (action.type === 'todos/add') {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }
  return state;
}
```

## Data Flow

- actions are dispatched on user interaction like a click
- the store runs the reducer and calculate the new sate
- if state updates, UI shows the changes

## Setup RTK with cra

```bash
npx create-react-app my-app --template redux
```

## Setup RTK in an existing project

```bash
npm install @reduxjs/toolkit react-redux
```

Detailed instructions can be found [here](https://redux-toolkit.js.org/tutorials/quick-start).

## Creating a store

- in `store.js`

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

- in `index.js` or `app.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Creating a slice (reducer)

- in `counterSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

- in `store.js`

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../my/dir/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

## Using redux state and action in a component

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
```

Source: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
