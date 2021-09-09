import React, { useEffect, useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const EmailLoginScreen = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View style={{ padding: 20 }}>
                <Text>이메일 로그인 페이지</Text>

                <TextInput placeholder={"이메일를 입력해주세요."} value={email} onChangeText={setEmail} />
                <TextInput secureTextEntry={true} placeholder={"비밀번호를 입력해주세요."} value={password} onChangeText={setPassword} />

                <Button title={"Login"} onPress={async (_) => {
                    auth()
                    .signInWithEmailAndPassword(email,password)
                        .catch(error => {

                            if (error.code === "auth/user-not-found"){
                                Alert.alert("일치하는 유저가 없습니다.")
                            }
                            

                            console.error(error);
                        });
                }} />
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user !== undefined ? user.email : "없음"}</Text>
            <Button title={"로그아웃"} onPress={_ => {
                auth().signOut();
            }} />
        </View>
    );
}

EmailLoginScreen.options = {
    topBar: {
        title: {
            text: 'EmailLogin'
        }
    },
    bottomTab: {
        text: 'EmailLogin'
    }
}

export default EmailLoginScreen
