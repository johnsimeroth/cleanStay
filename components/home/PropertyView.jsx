import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from '../../lib/styles';

const today = new Date();
const aWeekFromToday = new Date();
aWeekFromToday.setDate(today.getDate() + 7);

function Event({ event }) {

  function getLeftFromDate(date) {
    if (date < today) {
      return 0;
    }
    return ((date - today) / (aWeekFromToday - today)) * 100;
  }

  function getRightFromDate(date) {
    if (date > aWeekFromToday) {
      return 100;
    }
    return ((date - today) / (aWeekFromToday - today)) * 100;
  }

  function buildEventStyle(startDate, endDate) {
    const left = getLeftFromDate(startDate);
    const width = getRightFromDate(endDate) - left;
    const height = 30;
    const leftRad = startDate < today ? 0 : height / 2;
    const rightRad = endDate > aWeekFromToday ? 0 : height / 2;
    return ({
      backgroundColor: '#00A2FF',
      position: 'absolute',
      height: 30,
      borderTopRightRadius: rightRad,
      borderBottomRightRadius: rightRad,
      borderTopLeftRadius: leftRad,
      borderBottomLeftRadius: leftRad,
      left: `${left}%`,
      width: `${width}%`,
    })
  }

  return (
    <View
      style={buildEventStyle(
        new Date(event.start.date),
        new Date(event.end.date)
      )}
    />
  )
}


export default function PropertyView({ details, events }) {

  return (
    <View style={styles.paddedView}>
      <Text style={styles.big4}>{details.address}</Text>
      <View style={{justifyContent: 'center'}}>
        <View style={styles.timelineBar} />
        {events.map((event, index) => <Event event={event} key={index} />)}
      </View>
    </View>
  );
}
