import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from '../../lib/styles.js';

import PropertyView from './PropertyView';


export default function AddressList({ properties }) {

  return (
    <View >
      <Text style={styles.big2}>My Properties </Text>
      {properties.map((property, index) => (
        <PropertyView
        details={property.details}
        events={property.reservations}
        key={index} />
      ))}
    </View>
  );
}
