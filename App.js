import React from 'react';
import Home from './screens/Home';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeStack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
      tabBarOptions={{
        activeTintColor: 'skyblue',
        inactiveTintColor:'white',
        inactiveBackgroundColor:'#000000',
        activeBackgroundColor:'#000000',
        labelStyle: {
        fontSize: 18,
        },
        style: {
              marginLeft: 50,
              marginRight: 50,
              marginBottom: 30,
              borderRadius: 35,
              position: 'absolute',
              paddingHorizontal: 20,
              backgroundColor: '#000000',
              borderWidth: 3,
              borderTopWidth:4,
              borderColor:'skyblue',
              borderTopColor:'skyblue',
          },
        labelPosition: 'beside-icon',
      }}>
        <HomeStack.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}/>
        <HomeStack.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

