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
                const confirmation = await auth().signInWithPhoneNumber(`+82 ${phonNumber}`);
                setConfirm(confirmation);
                Alert.alert("전송되었습니다.")
            }} />

            <TextInput value={code} onChangeText={setCode} placeholder={"인증번호 입력"} />
            <Button title={"인증"} onPress={async (_) => {
                if(confirm !== null){
                    try {
                        await confirm.confirm(code);
                        Alert.alert("인증되었습니다.")
                    } catch (error) {
                        console.log('Invalid code.');
                    }
                }else{
                    Alert.alert("잘못된 상황")
                }
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
