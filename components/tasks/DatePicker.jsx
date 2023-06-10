import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../lib/styles';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DatePicker () {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text>Schedule for: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
