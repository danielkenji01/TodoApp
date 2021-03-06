import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from '../actions';

let nextId = 1;

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const { text } = action;
            console.log('adicionou todo!', text);
            const newTodo = {
                id: nextId++,
                text,
                done: false
            }
            return [...state, newTodo];
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                }

                return todo;
            });
        case TOGGLE_TODO:
            const { todoId } = action;
            console.log('toggle todo!', todoId);
            return state.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }

                return todo;
            });
        default:
            return state;
    }
}

export default todoListReducer;