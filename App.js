import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Nextscreen from './screen/Nextscreen';
const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Nextscreen" component={Nextscreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )

}


