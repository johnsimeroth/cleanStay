import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Button } from 'native-base';
import Dashboard from './home/Dashboard';
import AddressList from './home/AddressList';
import styles from '../lib/styles';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../lib/firebaseConfig';

export default function Home({ properties, navigation }) {

  return (
    <View >
      <Button onPress={() => signOut(auth)} >Sign Out</Button>
      <ScrollView style={styles.scrollView}>
        <Dashboard />
        {properties.length !== 0 && <AddressList properties={properties}/>}
      </ScrollView>
    </View>
  )
}
