import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Switch, useColorMode } from 'native-base';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../lib/firebaseConfig';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import UserInfo from './login/UserInfo';
import AddProperties from './login/AddProperties';
import Home from './Home';
// import Tasks from './Tasks';
import Money from './Money';
// import Nav from './Nav';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function getDarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';
  return <Switch isChecked={isChecked} onToggle={toggleColorMode} />;
}

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{ headerRight: getDarkModeToggle }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Money' component={Money} />
      {/* <Tab.Screen name='Tasks' component={Tasks} /> */}
    </Tab.Navigator>
  );
}

export default function TopLevelNav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // function getInitialRoute() {
  //   if (user) {
  //     if ()
  //   }
  //   return 'Sign In';
  // }

  return (
    <Stack.Navigator
      initialRouteName={user ? 'Main App' : 'Sign In'}
      screenOptions={{ headerRight: getDarkModeToggle }}
    >
      {user ? (
        <Stack.Screen name='Tab Nav' component={TabNav} options={{headerShown: false}}/>
      ) : (
        <>
          <Stack.Screen name='Sign In' component={SignIn} />
          <Stack.Screen name='Sign Up' component={SignUp} />
          <Stack.Screen name='About You' component={UserInfo} />
          <Stack.Screen name='Add Properties' component={AddProperties} />
        </>
      )}
    </Stack.Navigator>
  );
}
