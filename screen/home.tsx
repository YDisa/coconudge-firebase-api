import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacityBase } from 'react-native';
import { Navigation } from "react-native-navigation";

const HomeScreen = (props: any) => {
    return (
        <View style={styles.root}>
            <Text>홈화면</Text>
            <View style={styles.paddingView}></View>
            <Button  title={"회원가입으로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "SignUp",
                        options:{
                            topBar: {
                                title: {
                                    text: 'SignUp'
                                }
                            }
                        }
                    }
                })
            }} />
            <View style={styles.paddingView}></View>
            <Button title={"이미지업로드로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "ImageUpload",
                        options: {
                            topBar: {
                                title: {
                                    text: 'ImageUpload'
                                }
                            }
                        }
                    }
                })
            }} />
            <View style={styles.paddingView}></View>
            <Button title={"Todo 리스트로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "TodoList",
                        options: {
                            topBar: {
                                title: {
                                    text: 'TodoList'
                                }
                            }
                        }
                    }
                })
            }} />
            <View style={styles.paddingView}></View>
            <Button title={"구글로그인으로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "GoogleLogin",
                        options: {
                            topBar: {
                                title: {
                                    text: 'GoogleLogin'
                                }
                            }
                        }
                    }
                })
            }} />
            <View style={styles.paddingView}></View>
            <Button title={"이메일 로그인으로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "EmailLogin",
                        options: {
                            topBar: {
                                title: {
                                    text: 'EmailLogin'
                                }
                            }
                        }
                    }
                })
            }} />
            <View style={styles.paddingView}></View>
            <Button title={"휴대폰인증으로 이동"} onPress={_ => {
                Navigation.push(props.componentId, {
                    component: {
                        name: "PhoneAuth",
                        options: {
                            topBar: {
                                title: {
                                    text: 'PhoneAuth'
                                }
                            }
                        }
                    }
                })
            }} />
        </View>
    );
};

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    },
    paddingView:{
        height: 20
    }
});

export default HomeScreen