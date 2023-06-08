import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import MoneyDashboard from './money/MoneyDashboard';
import styles from '../lib/styles.js';

export default function Money() {

  return (
    <View >
      <Text style={styles.text}>Money screen</Text>
      <MoneyDashboard />
    </View>
  );
}
