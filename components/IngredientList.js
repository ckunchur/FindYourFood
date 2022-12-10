import { StyleSheet, SafeAreaView, Text, FlatList, Dimensions, ScrollView} from "react-native";
import Ingredient from './Ingredient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default IngredientList=({ingredients}) => {

  const renderIngredient = ({item, index}) => (
    <Ingredient
      id={item.id}
      index={index}
      ingredientName={item.name}
      />
  );


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{ width: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}>
      <FlatList
        data={ingredients} // the array of data that the FlatList displays
        renderItem={(item) => renderIngredient(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
    </ScrollView>
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
    },
    scrollView: {
        flex: 1,
        
    }
    

});

  

