import { StyleSheet, SafeAreaView, Text, FlatList, Dimensions, ScrollView, Pressable} from "react-native";
import RecipeBox from './RecipeBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function RecipeSearchList({recipes, navigation}){

  const renderRecipe = ({item, index}) => (

    <RecipeBox
      id={item.id}
      recipeName={item.title}
      recipeImage={item.image}
      navigation={navigation}
      />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipes} // the array of data that the FlatList displays
        renderItem={(item) => renderRecipe(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
        numColumns={2}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.1,
        marginBottom: windowHeight * 0.05
    },

});

  

