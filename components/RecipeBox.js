import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ImageBackground, Pressable} from 'react-native';
import { useState, useEffect } from "react";

  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { keys } from './keys';

  export default function RecipeBox({id, recipeName, recipeImage, navigation, route}) {
    const getURL = async () => {
    const response = await fetch("https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false&apiKey=" + keys.spoonacularAPIKey); 
    const response_json = await response.json();
    console.log(response_json.sourceUrl);
     navigation.navigate('RecipeScreen', {recipe: response_json.sourceUrl, id: id})
  }
 
    return (

  
    <Pressable style={styles.recipeContainer} onPress={getURL}>
      <Image style={[styles.image, styles.shadows]}
        source={{uri: recipeImage}}/>
      <Text style={styles.text} numberOfLines={1}>{recipeName}</Text>
    </Pressable>
      
    );
  }
  
  //order: index, image, songname above artist name, album name, time 
  const styles = StyleSheet.create({
    recipeContainer: {
        margin: windowWidth * 0.03,
        width: windowWidth * 0.4,
        height: windowWidth * 0.3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
    text: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',

    },
    image: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.3,
        borderRadius: "10%",
        borderColor: 'black',
        borderWidth: 3,
    },
    shadows: {
      shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
  
  });