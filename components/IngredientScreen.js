import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, ImageEditor } from 'react-native';
import Footer from './footer';
import Header from './plain-header';
import IngredientList from './IngredientList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function IngredientScreen({navigation, route}) {
  console.log(route.params)
 
 let contentDisplayed; // set equal to list component if true
  if (route.params == null) {
    contentDisplayed = 
    <View style={[styles.view, styles.shadows]}>
      <Text style={styles.text}>Choose a recipe on the search or photo screen to get started!</Text>
    </View>
  }
  else {
    let ingredients = route.params.ingredients
    contentDisplayed =  
    
      <IngredientList ingredients={ingredients}/>
   
  }
  return (
    <SafeAreaView style={styles.container}>
        <Header title={<Text>Shopping List</Text>}/>
        {contentDisplayed}
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    // fontWeight: 'bold',
    fontSize: windowWidth * 0.06,
    width: '85%',
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
    height: windowHeight * 0.2,
    borderRadius: '15%',
  },
  shadows: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
  },

});
