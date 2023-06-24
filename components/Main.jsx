import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../lib/firebaseConfig';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import UserInfo from './login/UserInfo';
import AddProperties from './login/AddProperties';
import Home from './Home';
// import Tasks from './Tasks';
// import Money from './Money';
// import Nav from './Nav';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // TODO: use redux to pass needed props to components instead of passing as children.
  return (
    <Stack.Navigator initialRouteName={user ? 'Home' : 'Sign In'}>
      {user ? (
        <Stack.Screen
          name='Home'
          children={(props) => <Home {...props} properties={[]} />}
        />
      ) : (
        <>
          <Stack.Screen
            name='Sign In'
            children={(props) => <SignIn {...props} />}
          />
          <Stack.Screen
            name='Sign Up'
            children={(props) => <SignUp {...props} />}
          />
          <Stack.Screen
            name='About You'
            children={(props) => <UserInfo {...props} />}
          />
          <Stack.Screen
            name='Add Properties'
            children={(props) => <AddProperties {...props} />}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
