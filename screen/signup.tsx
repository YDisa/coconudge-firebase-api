import React, { useCallback, useState } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';

const SignupScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <View style={{ padding: 20 }}>
            <Text>회원가입 페이지</Text>
            <TextInput placeholder={"이메일를 입력해주세요."} value={email} onChangeText={setEmail} />
            <TextInput secureTextEntry={true} placeholder={"비밀번호를 입력해주세요."} value={password} onChangeText={setPassword} />
            <Button title={"완료"} onPress={async (_) => {
                await analytics().logSignUp({
                    method: "email"
                })
                await analytics().logEvent("signup", {
                    email: email,
                })
                Alert.alert("확인", "회원가입하시겠습니까?", [
                    {
                        text: "예",
                        onPress: () => {
                            auth()
                                .createUserWithEmailAndPassword(email, password)
                                .then(async (user) => {
                                    console.log('User account created & signed in!');
                                    const snapshot = await database().ref("/users").once('value')

                                    database().ref("/users/" + (snapshot.numChildren()))
                                        .set({ email: email, password: password, uid: user.user.uid })
                                        .then(result => {
                                            console.log(result);
                                            Alert.alert("회원가입 완료")
                                            analytics().logEvent("signup_success", {
                                                email: email,
                                                uid: user.user.uid
                                            })
                                        })
                                        .catch(err => {
                                            console.error(err);
                                            analytics().logEvent("signup_error", {
                                                email: email,
                                            })
                                            Alert.alert("에러가 발생했습니다.")
                                        })
                                })
                                .catch(error => {
                                    if (error.code === 'auth/email-already-in-use') {
                                        console.log('That email address is already in use!');
                                    }

                                    if (error.code === 'auth/invalid-email') {
                                        console.log('That email address is invalid!');
                                    }

                                    console.error(error);
                                });
                        }
                    },
                    {
                        text: "아니요",
                        onPress: () => {
                            analytics().logEvent("signup_error", {
                                email: email,
                            })
                        }
                    }
                ])



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
