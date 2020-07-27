import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo }) => {
    return (
        <TouchableOpacity onPress={onPressTodo}>
            <View style={styles.line}>
                <Text style={[
                    styles.lineText,
                    todo.done ? styles.lineThrough : null    
                ]}>
                    { todo.text }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    },
    lineThrough: {
        textDecorationLine: 'line-through'
    }
});

export default TodoListItem;