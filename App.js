import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, Center, Text } from 'native-base';
import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from './lib/firebaseConfig.js';

import SignUp from './components/SignUp';
// import styles from './lib/styles.js';
// import Home from './components/Home.jsx';
// import Tasks from './components/Tasks.jsx';-
// import Money from './components/Money.jsx';
// import Nav from './components/Nav.jsx';

export default function App() {
  // const [screen, setScreen] = useState('Home');
  // const [properties, setProperties] = useState([]);
  // useEffect(() => { getAndSetProperties() }, []);

  // async function getAndSetProperties() {
  //   axios.get('http://192.168.50.80:8000/properties')
  //     .then(({ data }) => setProperties(data))
  //     .catch((err) => console.error('Failed to get reservations', err));
  // }

  // async function getAndSetProperties() {
  //   axios.get('http://127.0.0.1:5001/cleanstay/us-central1/getProperties?userId=1')
  //     .then(({ data }) => console.log(data))
  //     .catch((err) => console.error('Failed to get reservations', err));
  // }

  // function navigateTo(newScreen) {
  //   setScreen(newScreen);
  // }

  // return (
  //     <SafeAreaView style={styles.safe}>
  //       {screen === 'Home' && <Home properties={properties} />}
  //       {screen === 'Tasks' && <Tasks
  //         tasks={(properties.map((property) => property.tasks)).flat(1)}
  //         propertyIDs={(properties.map((property) => property.details.id))}
  //         refreshFunc={getAndSetProperties}
  //       />}
  //       {screen === 'Money' && <Money />}
  //       <Nav navigateTo={navigateTo} />
  //     </SafeAreaView>
  // );

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('');

  function handleSignup(newUser) {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password1)
      .then((cred) => setUser(JSON.stringify(cred)))
      .catch((err) => console.error(err))
  }

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1}>
        <SignUp handleSignup={handleSignup} />
        <Text>
          {user}
        </Text>
      </Box>
    </NativeBaseProvider>
  );
}
