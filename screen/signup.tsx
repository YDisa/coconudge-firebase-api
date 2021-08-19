import React, { useCallback, useState } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'

const SignupScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <View style={{ padding: 20 }}>
            <Text>회원가입 페이지</Text>
            <TextInput placeholder={"이메일를 입력해주세요."} value={email} onChangeText={setEmail} />
            <TextInput secureTextEntry={true} placeholder={"비밀번호를 입력해주세요."} value={password} onChangeText={setPassword} />
            <Button title={"완료"} onPress={async (_) => {
                
            }} />
        </View>
    )
}

SignupScreen.options = {
    topBar: {
        title: {
            text: 'Settings'
        }
    },
    bottomTab: {
        text: 'Settings'
    }
}

export default SignupScreen
