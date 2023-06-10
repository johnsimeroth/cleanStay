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
import {
  useCheckStoredJWTQuery,
  useStoreJWTMutation,
} from '../lib/redux/services/auth';
import SignUp from './login/SignUp';
import SignIn from './login/SignIn';
import Home from './Home';
// import Tasks from './Tasks';
// import Money from './Money';
// import Nav from './Nav';

const Stack = createNativeStackNavigator();

export default function App() {
  const { data: token, isLoading, isError } = useCheckStoredJWTQuery();
  useEffect(() => {
    console.log('token is: ', token);
  }, [token])
  // const [user, setUser] = useState(null);

  // function handleSignUp(newUser) {
  //   createUserWithEmailAndPassword(auth, newUser.email, newUser.password1)
  //     .then((cred) => setUser(cred))
  //     .then(() => navigation.navigate('Home'))
  //     .catch((err) => console.error(err));
  // }

  // function handleSignIn(existingUser, navigation, reset) {
  //   signInWithEmailAndPassword(auth, existingUser.email, existingUser.password)
  //     .then((cred) => setUser(cred))
  //     .then(() => navigation.navigate('Home'))
  //     .catch((err) => console.error(err));
  // }

  // function handleSignOut(navigation) {
  //   setUser(null);
  //   navigation.navigate('SignIn');
  // }

  return (
    <Stack.Navigator initialRouteName={token ? 'Home' : 'SignIn'}>
      {token ? (
        <Stack.Screen
          name='Home'
          children={(props) => <Home {...props} properties={[]} />}
        />
      ) : (
        <>
          <Stack.Screen
            name='SignIn'
            children={(props) => <SignIn {...props} />}
          />
          <Stack.Screen
            name='SignUp'
            children={(props) => <SignUp {...props} />}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
