import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import styles from '../lib/styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

function NavButton({ navTo, route, icon }) {

  return (
    <TouchableHighlight
      underlayColor='#00A2FF'
      onPress={(e) => navTo(route)}
      style={styles.container}
    >
      {icon()}
    </TouchableHighlight>
  );
}


export default function Nav({ navigateTo }) {
  return (
    <View style={styles.navBar}>
      <NavButton
        navTo={navigateTo}
        route={'Home'}
        icon={() => <MaterialCommunityIcons name="home-roof" size={24} color="white" />}
      />
      <NavButton
        navTo={navigateTo}
        route={'Scheduling'}
        icon={() => <Feather name="calendar" size={24} color="white" />}
      />
      <NavButton
        navTo={navigateTo}
        route={'Money'}
        icon={() => <MaterialCommunityIcons name="hand-coin-outline" size={24} color="white" />}
      />

    </View>
  );
}


