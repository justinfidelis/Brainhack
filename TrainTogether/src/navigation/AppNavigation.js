import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen.js';
import PlannerScreen from '../screens/PlannerScreen.js';
import RewardsScreen from '../screens/RewardsScreen.js';
import SocialScreen from '../screens/SocialScreen.js';
import ProfileScreen from '../screens/ProfileScreen.js';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
      <Tab.Navigator initialRouteName='Home'
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: 'rgb(127, 139, 163)',
          tabBarInactiveTintColor: 'white',
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Planner"
          component={PlannerScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="calendar" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Social"
          component={SocialScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account-group" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="gift-outline" size={32} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" size={32} color={color} />
            ),
          }}
        />
      
      </Tab.Navigator>
);

const AppNavigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'rgb(15, 50, 125)',
      borderRadius: 30
    },
  });

  export default AppNavigation;
