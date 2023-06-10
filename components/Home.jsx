import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Button } from 'native-base';
import Dashboard from './home/Dashboard';
import AddressList from './home/AddressList';
import styles from '../lib/styles';

import { useCheckStoredJWTQuery, useLogoutMutation } from '../lib/redux/services/auth';

export default function Home({ properties, navigation }) {
  const [logout, { isLoading }] = useLogoutMutation();
  const { data: token, isError } = useCheckStoredJWTQuery();
  useEffect(() => {
    console.log('from home token is: ', token);
  }, [token])

  function signOut() {
    logout();
  }

  return (
    <View >
      <Button onPress={signOut} >Sign Out</Button>
      <ScrollView style={styles.scrollView}>
        <Dashboard />
        {properties.length !== 0 && <AddressList properties={properties}/>}
      </ScrollView>
    </View>
  )
}
