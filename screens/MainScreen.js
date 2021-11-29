import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import icon from 'react-native-vector-icons/FontAwesome'
import icon1 from 'react-native-vector-icons/AntDesign'
import icon2 from 'react-native-vector-icons/AntDesign'


import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Settings from './Settings';
import TodoList from './TodoList';

import { Avatar } from 'react-native-paper';

import { View, Button, Image } from 'react-native'
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import UpdateList from './UpdateList'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (


    <Tab.Navigator

      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 12,
          fontWeight: "bold"
        },
        style: {
          backgroundColor: "yellowgreen",


        },

      }}


    >
      <Tab.Screen name="Home"



        component={HomeScreen} options={{
          tabBarIcon: () => (<View style={{ marginLeft: 9 }}>
            <icon.Button backgroundColor="yellowgreen" color="grey" name="home" size={18}></icon.Button>
          </View>),

        }} />
      <Tab.Screen name="Search" options={{
        tabBarIcon: () => (<View style={{ marginLeft: 5 }}>
          <icon.Button backgroundColor="yellowgreen" color="grey" name="search" size={18}></icon.Button>
        </View>)
      }} component={SearchScreen} />
      <Tab.Screen options={{
        tabBarIcon: () => (<View style={{ marginLeft: 9 }}>
          <icon.Button backgroundColor="yellowgreen" color="grey" name="user" size={18}></icon.Button>
        </View>)
      }} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{
        tabBarIcon: () => (<View style={{ marginLeft: 8 }}>
          <icon.Button backgroundColor="yellowgreen" color="grey" name="question-circle-o" size={18}></icon.Button>
        </View>)
      }} name="Settings" component={SettingsScreen} />


    </Tab.Navigator>


  )
}


export default MainScreen;
const HomeScreen = ({ navigation }) => {
  return (



    <Stack.Navigator

      screenOptions={{
        headerStyle: {
          backgroundColor: "yellowgreen",

        },
        headerTintColor: 'black',
        headerLeft: () => (<View style={{ paddingLeft: 20 }}>
          <icon.Button backgroundColor="yellowgreen" color="black" onPress={() => { navigation.openDrawer() }} name="bars" size={25}></icon.Button>
        </View>),
        headerRight: () => (
          <View style={{ paddingRight: 20 }}>
            <icon.Button
              name="users"
              onPress={() => alert('This is a button!')}
              backgroundColor="yellowgreen" color="black"


            ></icon.Button>
          </View>
        ),


      }}
    >

      <Stack.Screen
        name="Home"
        component={Home}

        initialParams={{ city: "siliguri" }}

      />

    </Stack.Navigator>

  )
}



const SearchScreen = ({ navigation }) => {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "yellowgreen",

      },

      headerTintColor: 'black',
      headerLeft: () => (<View style={{ paddingLeft: 20 }}>
        <icon.Button backgroundColor="yellowgreen" color="black" onPress={() => { navigation.openDrawer() }} name="bars" size={25}></icon.Button>
      </View>)


    }}
    >

      <Stack.Screen style={{ marginLeft: 250 }}
        name="Seatch Components"
        component={Search}
        options={{
          style: {


          }
        }

        }


      />

    </Stack.Navigator>

  )
}





const SettingsScreen = ({ navigation }) => {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "yellowgreen",

      },

      headerTintColor: 'black',
      headerLeft: () => (<View style={{ paddingLeft: 20 }}>
        <icon.Button backgroundColor="yellowgreen" color="black" onPress={() => { navigation.openDrawer() }} name="bars" size={25}></icon.Button>
      </View>)


    }}
    >

      <Stack.Screen style={{ marginLeft: 250 }}
        name="Settings"
        component={Settings}
        options={{
          style: {


          }
        }

        }


      />

    </Stack.Navigator>

  )
}







const ProfileScreen = ({ navigation }) => {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "yellowgreen",

      },

      headerTintColor: 'black',
      headerLeft: () => (<View style={{ paddingLeft: 20 }}>
        <Avatar.Text size={40} label="RJ" />
      </View>),
      headerRight: () => (
        <View style={{ paddingRight: 20 }}>
          <icon1.Button
            name="right"
            onPress={() => alert('This is a button!')}
            backgroundColor="yellowgreen" color="black"


          ></icon1.Button>
        </View>
      ),


    }}
    >

      <Stack.Screen style={{ marginLeft: 250 }}
        name="Rahul Jha"
        component={Profile}
        options={{
          style: {


          }
        }

        }


      />

    </Stack.Navigator>

  )
}


<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Update"
      component={UpdateList}
    />
  </Stack.Navigator>
</NavigationContainer>








