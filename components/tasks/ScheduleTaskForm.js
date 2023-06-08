import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../lib/styles.js';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CleanCompleteForm({ task, closeModal, handleSubmit }) {
  const [date, setDate] = useState(new Date());

  function onChange(event, selectedDate) {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  function resetAndClose() {
    setDate(new Date());
    closeModal();
  }

  return (
    <View style={styles.modal}>
      <Text style={[styles.big2, { paddingBottom: 20 }]}>Schedule a Task</Text>
      <Text style={styles.big4}>Task: {task.description + '\n\n'}</Text>

      <View style={styles.container}>
        <Text>Schedule for: {date.toLocaleString()}</Text>
          <DateTimePicker
            value={date}
            mode={'datetime'}
            minimumDate={new Date()}
            maximumDate={new Date(task.due)}
            is24Hour={false}
            onChange={onChange}
            themeVariant={'dark'}
          />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 30 }}>
        <Button
          title='Cancel'
          onPress={resetAndClose}
        />
        <Button
          title='Submit'
          onPress={() => {
            handleSubmit(task, date);
            resetAndClose();
          }}
        />
      </View>
    </View>
  );
}
