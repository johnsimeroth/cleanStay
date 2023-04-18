import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import Task from './Task.jsx';

export default function TasksList() {

  return (
    <View >
      <Text >Task List: </Text>
      <Task />
      <Task />
    </View>
  );
}
