import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from '../../lib/styles.js';

export default function Dashboard() {

  return (
    <View >
      <Text style={styles.big2}>Today</Text>
      <View style={styles.gridRow}>

        <View style={styles.gridCol}>
          <Text style={styles.big1} >3</Text>
          <Text style={styles.big3} >Cleanings Scheduled</Text>
        </View>

        <View style={styles.gridCol}>
          <Text style={styles.big1} >2</Text>
          <Text style={styles.big3} >Maintenance Tasks</Text>
        </View>

        <View style={styles.gridCol}>
          <Text style={styles.big1} >4</Text>
          <Text style={styles.big3} >Total Homes{'\n'}</Text>
        </View>

      </View>
    </View>
  );
}
