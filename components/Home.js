import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import Dashboard from './home/Dashboard';
import AddressList from './home/AddressList';
import styles from '../lib/styles.js';

export default function Home({ properties }) {

  return (
    <View >
      <ScrollView style={styles.scrollView}>
        <Dashboard />
        {properties.length !== 0 && <AddressList properties={properties}/>}
      </ScrollView>
    </View>
  );
}
