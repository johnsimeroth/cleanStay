import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from '../lib/styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NavButton({ options, state, descriptors, navigation, label, route, index }) {

  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      <MaterialCommunityIcons name="home-roof" size={24} color="black" />
    </TouchableOpacity>
  );
}


export default function Nav({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <NavButton />
      <NavButton />
      <NavButton />
    </View>
  );
}


