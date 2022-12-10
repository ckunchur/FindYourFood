import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, ImageEditor, Pressable } from 'react-native';
import { useState, useEffect } from "react";
import RecipeScreen from "./RecipeScreen";
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { keys } from './keys';

  export default function RecipePreview({id, recipeName, recipeURL }) {
    const [imageURL, setImage] = useState(); 
    const navigation = useNavigation();
    const getImage = async () => {
    const response = await fetch("https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false&apiKey=" + keys.spoonacularAPIKey); 
    const response_json = await response.json();
     setImage(response_json.image);
  }
 
    return (
 
      <View style={styles.recipeContainer}>
        <Text style={styles.nameText} numberOfLines={1}>{recipeName}</Text>
        <Pressable style={[styles.button, styles.shadows]} onPress={() => navigation.navigate('RecipeScreen', {recipe: recipeURL, id: id})}>
            <Text style={styles.buttonText}>View Recipe</Text>
        </Pressable>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    recipeContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      height: '100%',
      backgroundColor: 'black',
      borderRadius: '15%',
      marginLeft: 10,
      marginVertical: 3
    },
    nameText: {
      marginLeft: windowWidth * 0.03,
      fontSize: windowHeight * 0.015,
      color: 'white',
      width: '65%',
      fontWeight: "bold",
    
      
    },
    buttonText: {
      fontSize: windowHeight * 0.015,
      fontWeight: "bold",
      color: 'white'
      
    },

    image: {
      width: 0.15 * windowWidth,
      height: 0.15 * windowWidth,
      margin: 10,
      resizeMode: 'contain'
      
    },
    button: {

      margin: 10,
      resizeMode: 'contain',
      backgroundColor: '#41B0C9',
      borderColor: 'white',
      borderWidth: 1,
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      height: windowHeight * 0.04,
      borderRadius: '10%',
    },
    shadows: {
      shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
    },
  
  });