import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, Pressable, TextInput} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({navigation, title}){

 


  const [text, onChangeText] = React.useState("Search for a recipe");
  
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.13,
    flexDirection: 'row',
    borderColor: '#41B0C9',
    backgroundColor: '#41B0C9',
    justifyContent: 'center',
    position: 'absolute',
    alignItems: "center",
    top: 0,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    
  

  }
});
