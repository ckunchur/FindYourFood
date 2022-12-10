import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
    const [image, setImage] = useState("https://spoonacular.com/recipeImages/635350-240x150.jpg");
    const addImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4,3],
          quality: 1,
        });
        console.log(JSON.stringify(result));
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return (
        <View style={imageUploaderStyles.container}>{
            image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        }
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                    <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:180,
        width:180,
        backgroundColor:'black',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.9,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'white',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
    }
})