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