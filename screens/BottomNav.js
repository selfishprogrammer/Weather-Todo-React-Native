import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Bottom = createBottomTabNavigator();
import Home from './Home'
import Search from './Search'
import Settings from './Settings'
import Profile from './Profile'
import { NavigationContainer } from '@react-navigation/native';


export default function BottomNav() {
  return (
    <NavigationContainer>
      <Bottom.Navigator initialRouteName="Home"  >
        <Bottom.Screen screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'yellowgreen' },
        }} name="Settings" initialParams={{ city: "siliguri" }} component={Settings} />
        <Bottom.Screen name="Profile" screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'yellowgreen' },
        }} component={Profile} />
      </Bottom.Navigator>
    </NavigationContainer>
  )
}
