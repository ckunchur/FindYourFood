import { StyleSheet, SafeAreaView, Text, FlatList, Dimensions} from "react-native";
import RecipePreview from './RecipePreview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default RecipeList=({recipes, navigation}) => {

  const renderRecipe = ({item, index}) => (
    <RecipePreview
      id={item.id}
      recipeName={item.title}
      recipeURL={item.url}
      />
  );


  return (  
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes} // the array of data that the FlatList displays
        renderItem={(item) => renderRecipe(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    top: windowHeight * 0.6,
    width: windowWidth * 0.95,
    height: windowHeight * 0.3,
  }
});

  

