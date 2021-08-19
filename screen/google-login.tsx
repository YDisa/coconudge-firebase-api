import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const GoogleLoginScreen = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>();

    // Handle user state changes
    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <View style={{ padding: 20 }}>
                <Text>구글로그인 페이지</Text>
                <Button title={"Login"} onPress={async (_) => {

                }} />
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user !== undefined ? user.email : "없음"}</Text>
            <Button title={"로그아웃"} onPress={_=>{
                
            }}/>
        </View>
    );
}

GoogleLoginScreen.options = {
    topBar: {
        title: {
            text: 'GoogleLogin'
        }
    },
    bottomTab: {
        text: 'GoogleLogin'
    }
}

export default GoogleLoginScreen
