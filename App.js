import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './lib/styles.js';
import Home from './components/Home.jsx';
import Scheduling from './components/Scheduling.jsx';
import Money from './components/Money.jsx';
import Nav from './components/Nav.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <Nav {...props} />}
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
          <Tab.Screen
            name='Home'
            component={Home}
          />
          <Tab.Screen name='Scheduling' component={Scheduling} />
          <Tab.Screen name='Money' component={Money} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
