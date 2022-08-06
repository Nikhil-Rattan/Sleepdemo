import 'react-native-gesture-handler';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splash from '../screens/splash'
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default class StackNavigation extends Component{
  
    render(){

    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' >
        <Stack.Screen name='splash' component={splash} options={{headerShown:false}} />
        <Stack.Screen name= 'Home' component={TabNavigator} options={{headerShown:false}} />
        </Stack.Navigator>
         </NavigationContainer>

    );
}
}