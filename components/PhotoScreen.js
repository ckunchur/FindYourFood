import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, ImageEditor, Pressable } from 'react-native';
import Footer from './footer';
import Header from './plain-header';
import UploadImage from './UploadImage';
import recipes from './recipes.json';
import RecipeList from './RecipeList'
import { useState, useEffect } from "react";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { keys } from './keys';

export default function PhotoScreen({navigation, route}) {
  const [data, setData] = useState(null); 
  const getMatches = async () => {
    const response = await fetch("https://api.spoonacular.com/food/images/analyze?imageUrl=https://spoonacular.com/recipeImages/635350-240x150.jpg&apiKey=" + keys.spoonacularAPIKey); 
    const response_json = await response.json();
    // console.log(response_json.recipes);
     setData(response_json);
  }
  
  let contentDisplayed; // set equal to list component if true
  if (data == null) {
    
  }
  else {
    contentDisplayed = 
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', position: 'absolute', top: windowHeight * 0.57}}>Top recipe hits</Text>
      <RecipeList recipes={data && data.recipes} navigation={navigation}/>   
    </View>
  }
   
  return (

    <View style={styles.container}>
        <Header title={<Text>FoodCam</Text>}/>
        <View style={styles.photoView}> 
            <View style={[styles.view]}>
            <Text style={styles.text}>Upload a picture to 
            find matching recipes!</Text>
            </View>
      
            <UploadImage/>    
            <Pressable style={[styles.button, styles.shadows]} onPress={() => getMatches()}>
              <Text style={styles.buttonText}>Find a Match</Text>
            </Pressable> 
        </View>
        <RecipeList recipes={data && data.recipes} navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
    
  },
  photoView: {
    position: 'absolute',
    top: windowHeight * 0.15,
    width: windowWidth * 0.9,
    height: windowHeight * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // recipeView: {
  //   position: 'absolute',
  //   top: windowHeight * 0.6,
  //   width: windowWidth * 0.9,
  //   height: windowHeight * 0.4,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'red'
  // },
  text: {
    fontSize: windowWidth * 0.045,
    width: '70%',
    color: 'white',
    fontWeight: 'bold'
  },
  
  button: {
    margin: 15,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.06,
    borderRadius: '15%',
  },
  view: {
    margin: 10,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.09,
    borderRadius: '15%',
  },
  buttonText: {
    fontSize: windowHeight * 0.015,
    fontWeight: "bold",
    color: 'white',
    
  },
  shadows: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
  },

});
