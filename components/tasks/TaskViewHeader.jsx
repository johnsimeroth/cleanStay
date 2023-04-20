import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../../lib/styles.js';

export default function TaskViewHeader({ task, handlePress }) {

  return (
    <View style={[styles.flexRow, { borderBottomWidth: 0 }]}>
      <View style={{ flex: 5, paddingLeft: 10 }} >
        <Text style={styles.small1}>Task</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Due</Text>
      </View>
      <View style={styles.bottomCenterFlex} >
        <Text style={styles.small1}>Priority</Text>
      </View>
    </View>
  );
}
