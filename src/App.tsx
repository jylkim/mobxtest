import React from 'react';
import {TodoList} from "./components/TodoList";
import {TodoNew} from "./components/TodoNew";

const App = () => {
    return (
        <div className="App">
            <TodoNew/>
            <TodoList/>
        </div>
    );
}

export default App;
