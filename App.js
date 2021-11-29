import React from 'react';
import icon from 'react-native-vector-icons/FontAwesome';
import icon1 from 'react-native-vector-icons/AntDesign';
import { StatusBar, Button, useColorScheme, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Search from './screens/Search';

import MainScreen from './screens/MainScreen';
import TodoList from './screens/TodoList';
import UpdateList from './screens/UpdateList';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const draw = () => {
  return (<Drawer.Navigator initialRouteName="Home" drawerContentOptions={{
    activeTintColor: 'yellowgreen',
    itemStyle: { marginVertical: 5, marginLeft: 25, marginRight: 25 },
    backgroundColor: "white",
    inactiveTintColor: "grey",

  }}>
    <Drawer.Screen
      name="Home"
      initialParams={{ city: 'siliguri' }}
      component={MainScreen}

    />
    <Drawer.Screen
      name="Search"
      options={{
        icon: <Image source={{
          uri: 'https://reactnative.dev/img/header_logo.svg',
        }}
        />
      }}
      component={Search}
    />
    <Drawer.Screen
      name="Todo"
      initialParams={{ id: false }}
      component={TodoList}
    />
  </Drawer.Navigator>)
}

const App = () => {



  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="yellowgreen" />



      {/* <NavigationContainer>
<Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'yellowgreen' },
    }}
    >
      <Tab.Screen
        name="home"
        component={Home}

        initialParams={{city:"siliguri"}}
        options={{
          tabBarLabel: 'Home',
         
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          TabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
     
    </Tab.Navigator>
    </NavigationContainer> */}
      <NavigationContainer>



        <Stack.Navigator

        >
          <Stack.Screen
            name="Drawer"
            component={draw}
            options={{ headerShown: false }}

          />
          <Stack.Screen
            name="Update"
            component={UpdateList}
            options={{ headerShown: false }}

          />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
};

export default App;
