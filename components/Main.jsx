import { useState, useEffect } from 'react';
import { Box, Center, Text, ScrollView } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../lib/firebaseConfig';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
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
        </>
      )}
    </Stack.Navigator>
  );
}
