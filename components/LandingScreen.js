import { View, Text, StyleSheet, TouchableOpacity, 
  Image, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import SearchScreen from './SearchScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LandingScreen({ navigation, setPressed }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/landingPage-no-text.png')} style={styles.landingImage}>
            <View style={styles.taglineView}>
            <Text style={styles.taglineText}>Choose a meal.</Text>
              <Text style={[styles.taglineText, {color: '#41B0C9'}]}>Find your food.</Text>
              <Text style={styles.taglineText}>All in one place.</Text>
            </View>
              
          <TouchableOpacity style={styles.button} onPress={() => setPressed(true)} >
            <Text style={styles.landingButtonText}>Tap to get started.</Text>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingImage: {
    width: windowWidth,
    height: windowHeight * 1.03,
    flexDirection: 'row',
  },
  taglineView: {
    position: 'absolute',
    bottom: 0.25 * windowHeight,
    marginLeft: 0.33 * windowWidth,
    
  },
  taglineText: {
    fontWeight: 'bold', 
    fontSize: windowWidth * 0.05, 
    color: 'white',
  },
  button: {
    alignItems: "center",
    borderColor: 'white',
    borderWidth: 1,
    //backgroundColor: 'white',
    borderRadius: 99999,
    width: windowWidth * 0.5,
    height: windowHeight * 0.06,
    //padding: 20,
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: windowHeight * 0.015,
    paddingRight: windowWidth * 0.04,
    marginLeft: 0.25 * windowWidth,
    bottom: 0.15 * windowHeight,
  },
  landingButtonText: {
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
    color: 'white',
    marginLeft: 20,
   alignContent: 'center',
   alignItems: 'center',

  },
});
