import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions, ImageEditor } from 'react-native';
import Footer from './footer';
import Header from './plain-header';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';


import { useEffect, useState } from 'react';

import { keys } from './keys';

const placeType = "supermarket";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import GetLocation from 'react-native-get-location'


export default function StoreScreen({navigation, route}) {
  
 
  
  const [location, setLocation] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  
  let longitude = '-122.1769'; // SF store by default
  let latitude = '37.7675';

  const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

    let { coords } = await Location.getCurrentPositionAsync();
    setLocation(coords.longitude, coords.latitude)
    console.log(coords.longitude, coords.latitude)

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
    
      console.log(response)
      setCurrentCity(response[0].city);
    };
  }
  

    let radius = 4 * 1000; // within 4 km
    const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    latitude + ',' + longitude + '&radius=' +
    radius + '&type=' + placeType + '&key=' + keys.googleAPIKey;
    const [places, setPlaces] = useState([]);

    
    const getPlaces = async () => {
      const response = await fetch(url); 
      const response_json = await response.json();
      const newPlaces = []
      for (let googlePlace of response_json.results) {
        let place = {};
        let myLat = googlePlace.geometry.location.lat;
        let myLong = googlePlace.geometry.location.lng;
        let coordinate = {
          latitude: myLat,
          longitude: myLong,
        };
        

        place['placeTypes'] = googlePlace.types;
        place['coordinate'] = coordinate;
        place['placeId'] = googlePlace.place_id;
        place['placeName'] = googlePlace.name;
        newPlaces.push(place)
      }
      setPlaces(newPlaces)
  }
  console.log(
    'The places around San Francisco, CA, USA: ' +
    places.map(nearbyPlaces => nearbyPlaces.placeName),
  );

  

  return (
    
    <View style={styles.container}>
        <Header title={<Text>Store Locator</Text>}/>
        <MapView style={[styles.map, styles.shadows]}
          initialRegion={{
          latitude: latitude,
          longitude:longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        </MapView>
        <Pressable style={[styles.button, styles.shadows]} onPress={() => getLocation()}>
            <Text style={styles.buttonText}>Get Location</Text>
          </Pressable> 
          <Text>Longitude: {longitude}</Text>
          <Text>Latitude: {latitude}</Text>
          <Text style={{ fontWeight: "bold"}}>Current City: {currentCity}</Text>

        <Pressable style={[styles.button, styles.shadows]} onPress={() => getPlaces()}>
            <Text style={styles.buttonText}>Find local grocery stores</Text>
        </Pressable> 
        
        {places.slice(0, 4).map((store, index) => {
          return (
            <View>
              <View style={styles.storeContainer}>
              <Text style={styles.storeText}>{index + 1}. {places[index].placeName}</Text>

              </View>
            </View>
          )
        })}
       
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
  storeView: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.5,
    borderColor: 'black'

  },
  map: {
    marginTop: windowHeight * 0.15,
    width: '90%',
    height: '35%',
    borderRadius: '15%'
  },
  button: {
    margin: 10,
    resizeMode: 'contain',
    backgroundColor: '#41B0C9',
    borderColor: 'white',
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.06,
  },
  storeText: {
    fontWeight: 'bold',
    fontSize: windowWidth * 0.035,
    
  },
  buttonText: {
    fontSize: windowHeight * 0.015,
    fontWeight: "bold",
    color: 'white'
    
  },
  storeContainer: {
    flexDirection: 'row',
    justifyContent: 'left',
    backgroundColor: 'black',
    alignItems: 'center',
    width: windowWidth * 0.5,
    height: windowHeight * 0.04,
    margin: windowWidth * 0.01,
    borderRadius: '10%'
  },
  storeText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.1,
  },
  shadows: {
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
  },

});
