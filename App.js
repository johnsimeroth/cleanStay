import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import Home from './components/Home.jsx';

export default function App() {
  // const [events, setEvents] = useState([]);
  // useEffect(() => { getAndSetEvents() }, []);

  // const getAndSetEvents = () => {
  //   axios.get('http://localhost:8000/reservations')
  //     .then((response) => { setEvents(response.data) })
  //     .catch((err) => console.error(err));
  // };

  return (
    <SafeAreaView style={styles.safe}>
      <Text>Top Level App</Text>
      <Home />
      {/* <Nav /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
});

{/* <FlatList
        data={events}
        renderItem={({item}) => (
          <View >
              <Text >{item.summary}</Text>
              <Text >{item.start.date} - {item.end.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      /> */}