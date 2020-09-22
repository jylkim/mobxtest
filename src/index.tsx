import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StoreProvider} from "./store";
import {TodoList} from "./store/TodoList";

const todoList = new TodoList([
    'Should Starting Writing in React',
    'Should Learn MobX',
    'Should Watch Once Piece :)'
]);

ReactDOM.render(
    <StoreProvider value={todoList}>
        <App/>
    </StoreProvider>
    , document.getElementById('root'));
