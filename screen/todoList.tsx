import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native'

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState("")
    useEffect(() => {

    },[]);
    
        
    return (
        <View style={{ padding: 20 }}>
            <Text>할일!</Text>
            <FlatList
                data={todoList}
                renderItem={item => (
                    <View>
                        <Text>{item.item}</Text>
                    </View>
                )}
            />
            <View>
                <TextInput value={text} onChangeText={setText} placeholder={"할일 입력"} />
                <Button title={"저장"} onPress={async () => {
                    
                }} />
            </View>
        </View>
    )
}

TodoList.options = {
    topBar: {
        title: {
            text: 'TodoList'
        }
    },
    bottomTab: {
        text: 'TodoList'
    }
}

export default TodoList
