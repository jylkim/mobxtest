import React, {useState} from 'react';
import {useStore} from "../hooks/useStore";
import {onEnterPress} from "../hooks/useEnter";
import {useObserver, useLocalStore} from 'mobx-react';

export const TodoNew = () => {
    const todoList = useStore();
    const todo = useLocalStore(() => ({
      newTodo: "",
      setTodo(todo: string): void {
        this.newTodo = todo
      },
    }))

    const addTodo = () => {
        todoList.addTodo(todo.newTodo);
        todo.setTodo('');
    };

    return useObserver(() => 
        <div className="todo-new">
            <input type="text" onKeyDown={onEnterPress(addTodo)} onChange={(e) => todo.setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
};
