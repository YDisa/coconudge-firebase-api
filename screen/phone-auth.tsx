import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const PhoneAuthScreen = () => {
    const [phonNumber, setPhonNumber] = useState("");
    const [code, setCode] = useState("")
    const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
    return (
        <View style={{ padding: 20 }}>
            <Text>휴대폰 인증</Text>
            <TextInput value={phonNumber} onChangeText={setPhonNumber} placeholder={"휴대폰번호 입력"} />
            <Button title={"인증요청"} onPress={async (_) => {
            }} />

            <TextInput value={code} onChangeText={setCode} placeholder={"인증번호 입력"} />
            <Button title={"인증"} onPress={async (_) => {
            }} />
        </View>
    )
}

PhoneAuthScreen.options = {
    topBar: {
        title: {
            text: 'PhoneAuth'
        }
    },
    bottomTab: {
        text: 'PhoneAuth'
    }
}

export default PhoneAuthScreen
