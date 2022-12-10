import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from "react";
import FoodCamStack from './components/FoodCamStack';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import LandingScreen from './components/LandingScreen';
import SearchStack from './components/SearchStack';
import IngredientScreen from './components/IngredientScreen';
import StoreScreen from './components/StoreScreen';
import PhotoScreen from './components/PhotoScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  let contentDisplayed; // set equal to list component if true
  const [pressed, setPressed] = useState(false)
  if (pressed) {
    contentDisplayed = (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            labelStyle: { fontSize: 14 }
          },
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Shopping List') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Store Finder') {
              iconName = focused
                ? 'navigate-circle'
                : 'navigate-circle-outline';
            }
            else if (route.name === 'FoodCam') {
              iconName = focused
                ? 'camera'
                : 'camera-outline';
            }
            return <Ionicons name={iconName} size={24} color="black" />;
          }
        })}>
        {/* <Tab.Screen name="Search" options={{headerShown: false}}  component={SearchScreen} /> */}
        <Tab.Screen name="Search" options={{headerShown: false}}  component={SearchStack} />
        <Tab.Screen name="FoodCam" options={{headerShown: false}} component={FoodCamStack} />
        <Tab.Screen name="Shopping List" options={{headerShown: false}} component={IngredientScreen} />
        <Tab.Screen name="Store Finder" options={{headerShown: false}} component={StoreScreen} />
      </Tab.Navigator>
     
  </NavigationContainer>
    )

  }
  else { 
    contentDisplayed = (
    <SafeAreaView style={styles.container}> 
      <LandingScreen setPressed={setPressed}/>
    </SafeAreaView> 
    )
  }

  return contentDisplayed;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
