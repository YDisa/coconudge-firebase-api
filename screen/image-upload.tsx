import React from 'react'
import { Alert, Button, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const ImageUploadScreen = () => {
    return (
        <View>
            <Text>이미지업로드</Text>
            <Button title={"갤러리열기"} onPress={async () => {
                launchImageLibrary({
                    mediaType: 'photo',
                    selectionLimit: 1
                }, result => {
                    if (result.didCancel !== true && result.errorCode === undefined && result.assets !== undefined) {
                        const assets = result.assets;
                        const image = assets[0];

                        const reference = storage().ref(`/images/${image.fileName}`)
                        reference.putFile(image.uri as string).catch(err => {
                            console.log(err);
                            Alert.alert("업로드 실패")
                        })
                            .then(async (result) => {
                                // result.fullPath
                                const downUrl = await storage().ref(`/images/${image.fileName}`).getDownloadURL();
                                console.log("다운로드 URL : ", downUrl);
                                Alert.alert("업로드 완료")
                            })
                    } else {
                        Alert.alert("뭔가 잘못됬어")
                    }
                })
            }} />
        </View>
    )
}

ImageUploadScreen.options = {
    topBar: {
        title: {
            text: 'ImageUpload'
        }
    },
    bottomTab: {
        text: 'ImageUpload'
    }
}

export default ImageUploadScreen
