import { combineReducers } from 'redux';

import todoListReducer from './TodoListReducer';
import editingTodoReducer from './EditingTodoReducer';

const rootReducer = combineReducers({
    todos: todoListReducer,
    editingTodo: editingTodoReducer
});

export default rootReducer;