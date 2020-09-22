import { useContext } from 'react';
import { StoreContext } from '../store';
import { TodoList } from '../store/TodoList';

export const useStore = (): TodoList => useContext(StoreContext);
