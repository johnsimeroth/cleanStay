import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';

import styles from './lib/styles.js';
import Home from './components/Home.jsx';
import Tasks from './components/Tasks.jsx';
import Money from './components/Money.jsx';
import Nav from './components/Nav.jsx';

export default function App() {
  [screen, setScreen] = useState('Home');
  [properties, setProperties] = useState([]);
  useEffect(() => { getAndSetProperties() }, []);

  async function getAndSetProperties() {
    axios.get('http://localhost:8000/properties')
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error('Failed to get reservations', err));
  }

  function navigateTo(newScreen) {
    setScreen(newScreen);
  }

  return (
      <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scrollView}>
        {screen === 'Home' && <Home properties={properties} />}
        {screen === 'Tasks' && <Tasks
          tasks={(properties.map((property) => property.tasks)).flat(1)}
          propertyIDs={(properties.map((property) => property.details.id))}
          refreshFunc={getAndSetProperties}
        />}
        {screen === 'Money' && <Money />}
        </ScrollView>
        <Nav navigateTo={navigateTo} />
      </SafeAreaView>
  );
}
