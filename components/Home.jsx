import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import Dashboard from './home/Dashboard.jsx';
import AddressList from './home/AddressList.jsx';
import styles from '../lib/styles.js';

export default function Home({ properties }) {

  return (
    <View >
      <Dashboard />
      {properties.length !== 0 && <AddressList properties={properties}/>}
    </View>
  );
}