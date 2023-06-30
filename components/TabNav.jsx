import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Switch, useColorMode } from 'native-base';

import Home from './Home';
// import Tasks from './Tasks';
import Money from './Money';

const Tab = createBottomTabNavigator();
function getDarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';
  return <Switch isChecked={isChecked} onToggle={toggleColorMode} />;
}

export default function TabNav() {
  return (
    <Tab.Navigator screenOptions={{ headerRight: getDarkModeToggle }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Money' component={Money} />
      {/* <Tab.Screen name='Tasks' component={Tasks} /> */}
    </Tab.Navigator>
  );
}
