import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends React.Component {

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;

        if (todo.id) {
            this.props.dispatchUpdateTodo(todo);
            return;
        }

        const { text } = todo;
        this.props.dispatchAddTodo(text);
        // this.props.dispatchSetTodoText('');
    }

    render() {
        const { text } = this.props.todo;

        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Adicionar"
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 5
    },
    buttonContainer: {
        flex: 2
    }
});

/*
const mapDispatchToProps = dispatch => {
    return {
        dispatchAddTodo: text => dispatch(addTodo(text))
    }
} */

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
};

// Currying
export default connect(
    mapStateToProps,
    { 
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);