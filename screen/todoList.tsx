import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native'
import database from '@react-native-firebase/database';

const TodoList = () => {

    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState("")
    useEffect(() => {
        database()
            .ref('/todoList')
            .on('value', snapshot => {
                console.log(snapshot.val());

                setTodoList(snapshot.val())
            });
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
                    database().ref("/todoList/" + (todoList.length))
                        .set(text)
                        .then(result => {
                            // Alert.alert("회원가입 완료")
                            setText("")
                        })
                        .catch(err => {
                            console.error(err);
                            Alert.alert("에러가 발생했습니다.")
                        })
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
