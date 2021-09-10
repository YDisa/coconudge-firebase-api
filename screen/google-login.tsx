import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

GoogleSignin.configure({
    webClientId: '1078275245493-e5r3n3rn76tlbb6r0u1ajr3oeu2n67jh.apps.googleusercontent.com',
});

const GoogleLoginScreen = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<any>();

    // Handle user state changes
    async function onAuthStateChanged(user: any) {
        setUser(user);
        const token = await messaging().getToken();
        console.log("FCM token :", token);

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
                <Text>구글로그인 페이지</Text>
                <Button title={"Login"} onPress={async (_) => {
                    // Get the users ID token
                    const { idToken } = await GoogleSignin.signIn();

                    // Create a Google credential with the token
                    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                    console.log("token : ", googleCredential.token);
                    console.log("secret : ", googleCredential.secret);
                    console.log("providerId : ", googleCredential.providerId);
                    await analytics().logLogin({ method: "google" })
                    // Sign-in the user with the credential
                    return auth().signInWithCredential(googleCredential);
                }} />
            </View>
        );
    }

    return (
        <View>
            <Text>Welcome {user !== undefined ? user.email : "없음"}</Text>
            <Button title={"로그아웃"} onPress={async(_) => {
                await auth().signOut();
                await messaging().deleteToken();
            }} />
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
