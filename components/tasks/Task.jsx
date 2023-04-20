import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from '../../lib/styles.js';

export default function Task({ task }) {
  const [dateString, setDateString] = useState('');
  useEffect(() => {
    const due = new Date(task.due);
    const dueString = `${due.getMonth() + 1}/${due.getDate()}`;
    setDateString(dueString);
  }, [task])

  return (
    <View style={styles.flexRow}>
      <View style={{flex: 5, paddingLeft: 10}} >
        <Text style={styles.small1}>{task.propertyName}</Text>
        <Text style={styles.big5}>{task.description}</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.big5}>{dateString}</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.big5}>{task.priority}</Text>
      </View>
    </View>
  );
}
