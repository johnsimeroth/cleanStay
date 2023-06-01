import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import styles from '../../lib/styles.js';

const colors = [ '#ee220c', '#fae232', '#1db100' ];
const size = 20;

export default function Task({ task, handlePress, formatDateString }) {
  const [dateString, setDateString] = useState('');
  useEffect(() => {setDateString(formatDateString(task.due))}, [task]);

  function createStyle (priority) {
    return {
      height: size,
      width: size,
      borderRadius: size / 2,
      backgroundColor: colors[priority - 1],
    }
  }

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
          {/* <Text style={styles.big5}>{task.priority}</Text> */}
          <View style={createStyle(task.priority)}/>
        </View>
      </View>
    </TouchableHighlight>
  );
}
