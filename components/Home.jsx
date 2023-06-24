import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'native-base';
import { signOut } from 'firebase/auth';

import Dashboard from './home/Dashboard';
import AddressList from './home/AddressList';
import styles from '../lib/styles';
import { auth } from '../lib/firebaseConfig';

export default function Home({ properties }) {
  return (
    <View>
      <Button onPress={() => signOut(auth)}>Sign Out</Button>
      <ScrollView style={styles.scrollView}>
        <Dashboard />
        {properties.length !== 0 && <AddressList properties={properties} />}
      </ScrollView>
    </View>
  );
}
