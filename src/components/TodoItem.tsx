import React from 'react';
import TodoItemClass  from "../store/TodoItem";
import { useStore } from "../hooks/useStore";
import {onEnterPress} from "../hooks/useEnter";
import {useObserver, useLocalStore} from "mobx-react";

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => {
    const todoList = useStore();

    const editing = useLocalStore(() => ({
      isEditing: false,
      toggleIsEdit(): void {
        this.isEditing = !this.isEditing;
      },
    }))

    const saveText = () => {
      editing.toggleIsEdit();
    };

    return useObserver(() => 
        <div className="todo-item">
            {
                editing.isEditing ?
                    <div>
                        <input type="text" onKeyDown={onEnterPress(saveText)} onChange={(e) => todo.updateText(e.target.value)}/>
                        <button onClick={saveText}>save</button>
                    </div>
                    :
                    <div>
                        <span>{todo.text}</span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        <button onClick={editing.toggleIsEdit}>edit</button>
                        <button onClick={() => todoList.removeTodo(todo)}>X</button>
                    </div>
            }
        </div>
    )
};
