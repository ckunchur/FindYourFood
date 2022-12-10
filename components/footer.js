import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Footer({navigation, route}){

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexChild}>
        <Ionicons name="search-outline" size={0.1 * windowWidth} color="white"/>
      </View>
        <View style={styles.flexChild}>
          <Ionicons name="navigate-circle-outline" size={0.1 * windowWidth} color="white"/>
        </View>
        <View style={styles.flexChild}>
          <Ionicons name="cart-outline" size={0.1 * windowWidth} color="white"/>
        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight * 0.16,
    flexDirection: 'row',
    borderColor: '#41B0C9',
    backgroundColor: '#41B0C9',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: -0.03 * windowHeight,
  },
  flexChild: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6%',
    paddingBottom: '9%'

  },
});
