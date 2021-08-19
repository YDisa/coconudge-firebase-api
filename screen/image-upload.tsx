import React from 'react'
import { Alert, Button, Text, View } from 'react-native';

const ImageUploadScreen = () => {
    return (
        <View>
            <Text>이미지업로드</Text>
            <Button title={"갤러리열기"} onPress={async () => {

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
