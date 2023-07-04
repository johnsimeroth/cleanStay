import React from 'react';
import { Box, Button } from 'native-base';
import { signOut } from 'firebase/auth';

import Dashboard from './home/Dashboard';
import AddressList from './home/AddressList';
import { auth } from '../lib/firebaseConfig';

export default function Home() {
  const properties = [];
  return (
    <Box>
      <Button onPress={() => signOut(auth)}>Sign Out</Button>
      <Dashboard />
      {properties.length !== 0 && <AddressList properties={properties} />}
    </Box>
  );
}
