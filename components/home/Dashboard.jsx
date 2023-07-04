import React from 'react';
import { Box, Heading, Text, HStack, VStack } from 'native-base';

export default function Dashboard() {
  return (
    <Box>
      <Heading size='lg'>Today</Heading>
      <HStack>
        <VStack alignItems='center' flex={1}>
          <Heading size='4xl'>3</Heading>
          <Text fontSize='md' textAlign='center'>
            Cleanings Scheduled
          </Text>
        </VStack>

        <VStack alignItems='center' flex={1}>
          <Heading size='4xl'>2</Heading>
          <Text fontSize='md' textAlign='center'>
            Maintenance Tasks
          </Text>
        </VStack>

        <VStack alignItems='center' flex={1}>
          <Heading size='4xl'>4</Heading>
          <Text fontSize='md' textAlign='center'>
            Total Homes
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
