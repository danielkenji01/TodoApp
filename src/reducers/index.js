import { combineReducers } from 'redux';

import todoListReducer from './TodoListReducer';

const rootReducer = combineReducers({
    todos: todoListReducer
});

export default rootReducer;