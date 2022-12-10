import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, ImageEditor, Pressable, ScrollView } from 'react-native';
import Footer from './footer';
import Header from './search-header';
import RecipeSearchList from './RecipeSearchList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { keys } from './keys';

export default function SearchScreen({navigation, route}) {
  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState(null);



  const getRecipes = async (query) => {
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + keys.spoonacularAPIKey); 
    const response_json = await response.json();
     setRecipes(response_json.results);
     console.log(query)
     console.log(recipes)
     setQuery(query)
  }
  let contentDisplayed; // set equal to list component if true
  if (recipes == null) {
    contentDisplayed = 
    <View style={[styles.view, styles.shadows]}>
      <Text style={styles.text}>Search for a recipe to get started!</Text>
    </View>
  }
  else {
    contentDisplayed = 
    <ScrollView style={{ width: '100%' }}
    contentContainerStyle={{ flexGrow: 1 }}>
       <RecipeSearchList recipes={recipes} navigation={navigation}/>
    </ScrollView>   
  }

  return (
    <View style={styles.container}>
        <Header onEnterQuery={(query) => getRecipes(query)}/>
        <Ionicons style={{ marginTop: windowHeight * 0.15 }}name="restaurant-outline" size={0.1 * windowWidth} color="black"/> 
        {contentDisplayed}
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
  text: {
    fontSize: windowWidth * 0.06,
    width: '80%',
    color: 'white'
  },
  view: {
    margin: 10,
    resizeMode: 'contain',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.13,
    borderRadius: '15%',
  },
  shadows: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
  },

});
