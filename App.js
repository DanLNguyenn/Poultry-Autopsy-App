import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartMenu from './src/screens/StartMenu';
import AutopsyTutorial from './src/screens/AutopsyTutorial';
import CameraScreen from './src/screens/CameraScreen';
import SamplePhotos from './src/screens/SamplePhotos';
import Settings from './src/screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartMenu">
        <Stack.Screen name="StartMenu" component={StartMenu} />
        <Stack.Screen name="AutopsyTutorial" component={AutopsyTutorial} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="SamplePhotos" component={SamplePhotos} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
