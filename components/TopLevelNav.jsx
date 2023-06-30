import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Switch, useColorMode } from 'native-base';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../lib/firebaseConfig';
import TabNav from './TabNav';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import UserInfo from './login/UserInfo';
import AddProperties from './login/AddProperties';

const Stack = createNativeStackNavigator();

function getDarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';
  return <Switch isChecked={isChecked} onToggle={toggleColorMode} />;
}

function getScreens(user, profileComplete) {
  if (user && profileComplete) {
    return {
      initialRoute: 'Tab Nav',
      screens: (
        <Stack.Screen
          name='Tab Nav'
          component={TabNav}
          options={{ headerShown: false }}
        />
      ),
    };
  }
  if (user) {
    return {
      initialRoute: 'About You',
      screens: (
        <>
          <Stack.Screen name='About You' component={UserInfo} />
          <Stack.Screen name='Add Properties' component={AddProperties} />
        </>
      ),
    };
  }
  return {
    initialRoute: 'Sign In',
    screens: (
      <>
        <Stack.Screen name='Sign In' component={SignIn} />
        <Stack.Screen name='Sign Up' component={SignUp} />
      </>
    ),
  };
}

export default function TopLevelNav() {
  const [user, setUser] = useState(null);
  const [profileComplete, setProfileComplete] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={getScreens(user, profileComplete).initialRoute}
      screenOptions={{ headerRight: getDarkModeToggle }}
    >
      {getScreens(user, profileComplete).screens}
    </Stack.Navigator>
  );
}
