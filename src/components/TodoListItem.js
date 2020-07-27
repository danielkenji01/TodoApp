import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo }) => {
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.line}>
                <Text styte={styles.lineText}>
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
    }
});

export default TodoListItem;