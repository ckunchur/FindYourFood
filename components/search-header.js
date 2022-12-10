import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, Pressable, TextInput} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({onEnterQuery}){

  const [text, onChangeText] = React.useState();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexChild}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Search for a recipe"
          value={text}
          onSubmitEditing={(e) => {
            onEnterQuery(e.nativeEvent.text)
          }}
        />
      </View>
      <View style={{paddingRight: windowWidth * 0.13}}>
        <Pressable >
          <Ionicons name="search-outline" size={0.1 * windowWidth} color="white"/>
        </Pressable>
      </View>
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
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
  },
  flexChild: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: windowWidth * 0.25,
    paddingBottom: '5%'

  },
  input: {
    alignItems: "center",
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 99999,
    width: windowWidth * 0.5,
    height: windowHeight * 0.06,
    paddingLeft: windowWidth * 0.07,
    color: 'white'
  }
});
