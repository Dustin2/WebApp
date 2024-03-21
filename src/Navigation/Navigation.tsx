import React from 'react';

/// external depnedecies
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import {SplashScreen} from '../screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import { Loginscreen } from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
