import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import TasksList from './home/TasksList.jsx';
import styles from '../lib/styles.js';

export default function Scheduling() {

  return (
    <View >
      <Text style={styles.text}>Scheduling screen</Text>
      <TasksList />
    </View>
  );
}