import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Task from './tasks/Task.jsx';
import styles from '../lib/styles.js';

export default function Tasks({ tasks, propertyIDs }) {
  const [IDs, setIDs] = useState(propertyIDs);
  // TODO: add functionality for user to change the list of IDs to filter by.

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.big2}>Unscheduled Tasks</Text>
      <View style={[styles.flexRow, {borderBottomWidth: 0}]}>
      <View style={{flex: 5, paddingLeft: 10}} >
        <Text style={styles.small1}>Task</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Due</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Priority</Text>
      </View>
    </View>
      <ScrollView style={{height: 250, width: '100%'}} >
        {tasks
          .filter((task) => !task.scheduled)
          .filter((task) => IDs.includes(task.propertyID))
          .map(task => <Task task={task} key={task._id} />)}
      </ScrollView>

      <Text style={styles.big2}>Scheduled Tasks</Text>
    </ScrollView>
  );
}