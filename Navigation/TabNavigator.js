import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var sleep=require('../images/icons/sleep.png');
var music=require('../images/icons/music.png');
var book=require('../images/icons/book.png');
var lotus=require('../images/icons/lotus-flower.png');
var alarm=require('../images/icons/alarm-clock.png')

import HomeScreen from '../screens/HomeScreen';
import SoundScreen from '../screens/SoundsScreen';
import StoriesScreen from '../screens/StoriesScreen';
import MeditationScreen from '../screens/MeditationScreen';
import AlarmScreen from '../screens/AlarmScreen';
import TabBar from '../Components/TabBar'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name='Home' component={HomeScreen} initialParams={{icon: sleep}}/>
            <Tab.Screen name='Sounds' component={SoundScreen} initialParams={{icon: music}} />
            <Tab.Screen name='Stories' component={StoriesScreen} initialParams={{icon: book}} />
            <Tab.Screen name='Meditation' component={MeditationScreen} initialParams={{icon:lotus}} />
            <Tab.Screen name='Alarm' component={AlarmScreen} initialParams={{icon:alarm}}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;