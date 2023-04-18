import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import Home from './components/Home.jsx';
import styles from './lib/styles.js';


export default function App() {

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.text}>Top Level App</Text>
      <Home />
    </SafeAreaView>
  );
}
