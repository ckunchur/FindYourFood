import { Text, View, ScrollView, StyleSheet, Pressable, Dimensions, SafeAreaView} from 'react-native';
import { useState } from 'react';
import {WebView} from "react-native-webview";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { keys } from './keys';

export default function RecipeScreen({ navigation, route }) {
  const [ingredients, setIngredients] = useState(); 
  let id = route.params.id

  console.log(route.params.recipe)

  const getIngredients = async () => {
    const response = await fetch("https://api.spoonacular.com/recipes/" + id + "/information?includeNutrition=false&apiKey=" + keys.spoonacularAPIKey); 
    const response_json = await response.json();
    console.log(response_json.extendedIngredients.map((item) => item.name))
    navigation.navigate('Shopping List', {ingredients: response_json.extendedIngredients})
  }
    return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#41B0C9' }}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}>
         <WebView 
          source={{
          uri: route.params.recipe }} />

      </ScrollView>
         <Pressable style={styles.button} onPress={getIngredients}> 
           <Text style={styles.buttonText}>Add Ingredients to Shopping List</Text>
      </Pressable> 
    </SafeAreaView>
    
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',

    },
    page: {
      height: '85%',
      width: '100%',
    },
    button: {
      margin: 10,
      marginLeft: windowWidth * 0.3,
      resizeMode: 'contain',
      backgroundColor: 'black',
      borderColor: 'white',
      borderWidth: 1,
      width: '40%',
      height: '10%',
      borderRadius: '9999',
      alignItems: 'center',
      justifyContent: 'center',
      height: windowHeight * 0.06,
    },
    buttonText: {
      fontSize: windowHeight * 0.015,
      fontWeight: "bold",
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',

      
    },

  
  });
  