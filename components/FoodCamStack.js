import {View, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import PhotoScreen from './PhotoScreen';
import RecipeScreen from './RecipeScreen';

  export default function FoodCamStack({navigation, route}){
    const Stack = createStackNavigator();

    return (
            <Stack.Navigator screenOptions={{headerTintColor: 'white', headerShadowVisible: false, headerStyle: { backgroundColor: '#41B0C9' }, headerBackTitle: 'Back'}}> 
                <Stack.Screen name="PhotoScreen" options={{headerShown: false}} component={PhotoScreen}/>
                <Stack.Screen name="RecipeScreen" options={{headerShown: true, title: 'View Recipe'}} component={RecipeScreen}/>
            </Stack.Navigator>
    )
  }
  