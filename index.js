/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
import { Navigation } from "react-native-navigation";
import GoogleLoginScreen from "./screen/google-login";
import HomeScreen from './screen/home'
import ImageUploadScreen from "./screen/image-upload";
import SignupScreen from "./screen/signup";
import TodoList from "./screen/todoList";
import EmailLoginScreen from "./screen/email-login";
import PhoneAuthScreen from "./screen/phone-auth";
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('SignUp', () => SignupScreen);
Navigation.registerComponent('TodoList', () => TodoList);
Navigation.registerComponent('ImageUpload', () => ImageUploadScreen);
Navigation.registerComponent('GoogleLogin', () => GoogleLoginScreen);
Navigation.registerComponent('EmailLogin', () => EmailLoginScreen);
Navigation.registerComponent('PhoneAuth', () => PhoneAuthScreen);
Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    },
    bottomTab: {
        fontSize: 14,
        selectedFontSize: 14
    }
});

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
            // bottomTabs: {
            //     stack: {
            //         children: [
            //             {
            //                 stack: {
            //                     component: {
            //                         name: 'Home'
            //                     }
            //                 },
            //             },
            //             // {
            //             //     stack: {
            //             //         component: {
            //             //             name: 'SignUp'
            //             //         }
            //             //     }
            //             // }
            //         ]
            //     }
            // }
        }
    });
});