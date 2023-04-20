import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import styles from '../../lib/styles.js';

export default function Task({ task, handlePress, formatDateString }) {
  const [dateString, setDateString] = useState('');
  useEffect(() => {setDateString(formatDateString(task.due))}, [task]);

  return (
    <TouchableHighlight
      underlayColor='#00A2FF'
      onPress={() => {handlePress(task)}}
      style={styles.container}
    >
      <View style={styles.flexRow}>
        <View style={{ flex: 5, paddingLeft: 10 }} >
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
    </TouchableHighlight>
  );
}
