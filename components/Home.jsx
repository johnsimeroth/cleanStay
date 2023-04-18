import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import Dashboard from './home/Dashboard.jsx';
import TasksList from './home/TasksList.jsx';
import styles from '../lib/styles.js';

export default function Home() {

  return (
    <View >
      <Text style={styles.text}>Home screen</Text>
      <Dashboard />
      <TasksList />
    </View>
  );
}