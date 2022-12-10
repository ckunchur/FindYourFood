import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions} from 'react-native';

  
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  export default function Ingredient({id, index, ingredientName}) {
    return (
      <SafeAreaView style={styles.ingredientContainer}>
        <View style={styles.view}>
        <Text style={styles.text}>{ingredientName}</Text>

        </View>
        
      </SafeAreaView>
    );
  }
  
  //order: index, image, songname above artist name, album name, time 
  const styles = StyleSheet.create({
    ingredientContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'black',
      alignItems: 'center',
      width: windowWidth * 0.8,
      height: windowHeight * 0.1,
      margin: windowWidth * 0.01,
      borderRadius: '10%'
    },
    text: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
      // marginLeft: windowWidth * 0.1,
    },
    view: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'space-between',

    }
  });